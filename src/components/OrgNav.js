import { Link } from "react-router-dom";

export function OrgNav() {
  return (
    <ul>
      <li>
        <Link to="/nhsuk">NHS Digital</Link>
      </li>
      <li>
        <Link to="/nice-digital">NICE Digital</Link>
      </li>
      <li>
        <Link to="/naimuri">Naimuri</Link>
      </li>
    </ul>
  );
}
