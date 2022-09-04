import { useParams } from "react-router-dom";
import { useGetReposForOrg } from "../hooks/useGetReposForOrg";
import { RepoOverview } from "./RepoOverview";
import { RepoList } from "./RepoList";

export function RepoView({ organisation }) {
  const urlParams = useParams();
  const { repos, isLoading, isError, fail, failMessage } = useGetReposForOrg(
    urlParams.organisation
  );

  if (isError) return <h1>Error with the request</h1>;
  if (isLoading) return <h1>loading...</h1>;
  if (fail) return <h1>{failMessage}</h1>;

  // Get the details of this org from the first repo
  // Should prob do this from another endpoint!
  const {
    owner: { login: orgName, avatar_url, url },
  } = repos[0];

  return (
    <main>
      {orgName && (
        <RepoOverview orgName={orgName} avatar_url={avatar_url} url={url} />
      )}
      <RepoList repos={repos} />
    </main>
  );
}
