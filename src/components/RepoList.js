import { RepoItem } from "./RepoItem";

export function RepoList({ repos }) {
  return (
    <ul>
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </ul>
  );
}
