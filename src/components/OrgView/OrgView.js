import { useParams } from "react-router-dom";
import { useGetOrgData } from "../../hooks/useGetOrgData";
import { OrgOverview } from "../OrgOverview/OrgOverview";
import { RepoList } from "../RepoList/RepoList";

export function OrgView() {
  const urlParams = useParams();
  const { data, isLoading, isError, fail, failMessage } = useGetOrgData(
    urlParams.organisation
  );

  if (isError) return <h1>Error with the request</h1>;
  if (isLoading)
    return <h1 aria-live="assertive">Loading organisation details</h1>;
  if (fail) return <h1>{failMessage}</h1>;

  // Get the details of this org from the first repo
  // Should prob do this from another endpoint!
  const {
    owner: { login: orgName, avatar_url, html_url },
  } = data[0];

  return (
    <main>
      {orgName && (
        <OrgOverview
          orgName={orgName}
          avatar_url={avatar_url}
          html_url={html_url}
        />
      )}
      <RepoList repos={data} orgName={orgName} />
    </main>
  );
}
