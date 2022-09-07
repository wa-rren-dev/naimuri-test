import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import s from "./OrgNav.module.scss";

export function OrgNav() {
  return (
    <>
      <Helmet>
        <title>List of organisations</title>
      </Helmet>
      <h1>Choose an organisation</h1>
      <ul className={s.OrgNav}>
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
    </>
  );
}
