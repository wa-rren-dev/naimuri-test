import { Helmet } from "react-helmet";
import s from "./OrgOverview.module.scss";

export function OrgOverview({ orgName, avatar_url, html_url }) {
  return (
    <div className={s.OrgOverview}>
      <Helmet>
        <title>List of {orgName} repositories</title>
      </Helmet>
      <h1 className={s.OrgOverview__heading}>
        List of <a href={html_url}>{orgName}</a> repositories
      </h1>
      {avatar_url && (
        <img
          className={s.OrgOverview__avatar}
          width="100"
          src={avatar_url}
          alt={`Github avatar for ${orgName}`}
        />
      )}
    </div>
  );
}
