import { RepoItem } from "./RepoItem";
import s from "./RepoList.module.scss";
import { useState } from "react";

export function RepoList({ repos, orgName }) {
  const [sortedBy, setSortedBy] = useState("name");

  const sortedRepos = sortRepos(repos, sortedBy);

  return (
    <>
      <p
        id="list-summary"
        className={s.RepoList__listSummary}
        aria-live="assertive"
      >
        Showing {repos.length} respositories, sorted by {sortedBy}.
      </p>
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
