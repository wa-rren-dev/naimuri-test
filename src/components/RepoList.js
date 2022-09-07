import { RepoItem } from "./RepoItem";
import s from "./RepoList.module.scss";

export function RepoList({ repos, orgName }) {
  return (
    <ul
      className={s.RepoList}
      aria-label={`List of repositories for ${orgName}`}
    >
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </ul>
  );
}
