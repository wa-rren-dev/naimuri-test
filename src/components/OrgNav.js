import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import s from "./OrgNav.module.scss";

export function OrgNav() {
  const navigate = useNavigate();

  const customOrgName = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate(`/${customOrgName.current.value}`);
  };

  return (
    <main>
      <Helmet>
        <title>List of organisations</title>
      </Helmet>
      <h1>Choose an organisation</h1>
      <ul className={s.OrgNav} aria-label="List of organisations">
        <li className={s.OrgNav__item}>
          <Link to="/nhsuk">NHS Digital</Link>
        </li>
        <li className={s.OrgNav__item}>
          <Link to="/nice-digital">NICE Digital</Link>
        </li>
        <li className={s.OrgNav__item}>
          <Link to="/naimuri">Naimuri</Link>
        </li>
      </ul>
      <h2>Enter your own Github organisation</h2>
      <p>
        For example <em>facebook</em> or <em>twitter</em>.
      </p>
      <form onSubmit={handleFormSubmit} className={s.OrgNav__customForm}>
        <label htmlFor="org-name" className={s.OrgNav__label}>
          Enter organisation name
        </label>
        <input
          ref={customOrgName}
          name="organisation"
          type="text"
          id="org-name"
          className={s.OrgNav__input}
        />
        <button className={s.OrgNav__submit}>View repositories</button>
      </form>
    </main>
  );
}
