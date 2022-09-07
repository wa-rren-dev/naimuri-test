import { useParams } from "react-router-dom";
import { useGetRepoData } from "../../hooks/useGetRepoData";
import { Readme } from "../Readme/Readme";
import { Helmet } from "react-helmet";

export function RepoView() {
  const urlParams = useParams();
  const { organisation, repo } = urlParams;
  const { data, isLoading, isError } = useGetRepoData(organisation, repo);

  if (isLoading) return <h1 aria-live="assertive">Loading repository</h1>;
  if (isError) return <h1>Error with the request</h1>;

  const { name, html_url, owner } = data;

  const { login } = owner;

  return (
    <main>
      <Helmet>
        <title>
          Readme for {login}/{name}
        </title>
      </Helmet>
      <h1>
        Readme for{" "}
        <a href={html_url}>
          {login}/{name}
        </a>
      </h1>
      <Readme />
    </main>
  );
}
