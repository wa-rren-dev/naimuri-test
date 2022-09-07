import { Link } from "react-router-dom";
import { DateTime } from "luxon";
import s from "./RepoItem.module.scss";

export function RepoItem({ repo }) {
  const { name, description } = repo;
  return (
    <li className={s.RepoItem} aria-label={name}>
      <div>
        <h2>
          <Link to={name}>{name}</Link>
        </h2>
        {description && (
          <p className={s.RepoItem__description}>{description}</p>
        )}
        <dl className={s.RepoItem__meta}>
          <div className={s.RepoItem__metaItem}>
            <dt>
              <span
                aria-hidden="true"
                className={s.RepoItem__metaIcon}
                title="Stars"
              >
                ⭐
              </span>
              ️ <span className={s.RepoItem__metaLabel}>Stars</span>
            </dt>
            <dd>{repo.stargazers_count}</dd>
          </div>
          <div className={s.RepoItem__metaItem}>
            <dt>
              <span
                aria-hidden="true"
                className={s.RepoItem__metaIcon}
                title="Forks"
              >
                🍴
              </span>{" "}
              <span className={s.RepoItem__metaLabel}>Forks</span>
            </dt>
            <dd>{repo.forks_count}</dd>
          </div>
          <div className={s.RepoItem__metaItem}>
            <dt>
              <span
                aria-hidden="true"
                className={s.RepoItem__metaIcon}
                title="Link to repository"
              >
                🔗
              </span>{" "}
              <span className={s.RepoItem__metaLabel}>Link</span>
            </dt>
            <dd>
              <a
                href={repo.html_url}
                aria-label={`View ${name} repo on Github`}
              >
                View on Github
              </a>
            </dd>
          </div>
          <div className={s.RepoItem__metaItem}>
            <dt>
              <span
                aria-hidden="true"
                className={s.RepoItem__metaIcon}
                title="Open issues"
              >
                🧐
              </span>{" "}
              <span className={s.RepoItem__metaLabel}>Open Issues</span>
            </dt>
            <dd>{repo.open_issues_count}</dd>
          </div>
          <div className={s.RepoItem__metaItem}>
            <dt>
              <span
                aria-hidden="true"
                className={s.RepoItem__metaIcon}
                title="Repo created"
              >
                🐣
              </span>{" "}
              <span className={s.RepoItem__metaLabel}>Created</span>
            </dt>
            <dd>{DateTime.fromISO(repo.created_at).toRelative()}</dd>
          </div>
        </dl>
      </div>
    </li>
  );
}
