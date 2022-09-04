import { Link } from "react-router-dom";

export function RepoItem({ repo }) {
  const { name, description } = repo;
  return (
    <li>
      <h2>
        <Link to={name}>{name}</Link>
      </h2>
      {description && <p>{description}</p>}
    </li>
  );
}
