import { RepoItem } from "../RepoItem/RepoItem";
import s from "./RepoList.module.scss";
import { useEffect, useState } from "react";

function setFocus(selector) {
  //  pull focus to top of page (like a refresh) in a cheap and nasty non-react way - should pass a ref down from the parent component
  const el = document.querySelector(selector);
  el.setAttribute("tabindex", "-1");
  el.focus();
}

export function RepoList({ repos, orgName }) {
  const [sortedBy, setSortedBy] = useState("name");
  const [liveRegionMessage, setLiveRegionMessage] = useState("");
  const sortedRepos = sortRepos(repos, sortedBy);

  useEffect(() => {
    setLiveRegionMessage(
      `Showing ${repos.length} repositories, sorted by ${sortedBy}.`
    );
    setFocus("main");
  }, [sortedBy, repos.length]);

  return (
    <>
      <p id="list-summary" className={s.RepoList__listSummary}>
        {liveRegionMessage}
      </p>
      {/* I know the below isn't the most elegant thing in the world but I have to draw a line somwehere! */}
      {/* Would prob refactor these to work on query parameters rather than state */}
      <p>
        You can also{" "}
        {sortedBy === "name" && (
          <>
            <button onClick={() => setSortedBy("stars")}>sort by stars</button>{" "}
            or <button onClick={() => setSortedBy("age")}>sort by age</button>.
          </>
        )}
        {sortedBy === "stars" && (
          <>
            <button onClick={() => setSortedBy("name")}>sort by name</button> or{" "}
            <button onClick={() => setSortedBy("age")}>sort by age</button>.
          </>
        )}
        {sortedBy === "age" && (
          <>
            <button onClick={() => setSortedBy("name")}>sort by name</button> or{" "}
            <button onClick={() => setSortedBy("stars")}>sort by stars</button>.
          </>
        )}
      </p>

      <ul
        className={s.RepoList}
        aria-describedby="list-summary"
        aria-label={`List of repositories for ${orgName}`}
      >
        {sortedRepos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </ul>
    </>
  );
}

function sortRepos(repos, sortBy) {
  switch (sortBy) {
    case "stars":
      return repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
    case "age":
      return repos.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
    default:
      return repos.sort((a, b) => a.name.localeCompare(b.name));
  }
}
