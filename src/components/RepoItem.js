import { Link } from "react-router-dom";
import { DateTime } from "luxon";

export function RepoItem({ repo }) {
  const { name, description } = repo;
  return (
    <li>
      <div>
        <h2>
          <Link to={name}>{name}</Link>
        </h2>
        {description && <p>{description}</p>}
        <dl>
          <dt>⭐️ Stars</dt>
          <dd>{repo.stargazers_count}</dd>

          <dt>🍴 Forks</dt>
          <dd>{repo.forks_count}</dd>

          <dt>🔗 Link</dt>
          <dd>{repo.html_url}</dd>

          <dt>🧐 Open Issues</dt>
          <dd>{repo.open_issues_count}</dd>

          <dt>🐣 Created</dt>
          <dd>{DateTime.fromISO(repo.created_at).toRelative()}</dd>
        </dl>
      </div>
    </li>
  );
}
