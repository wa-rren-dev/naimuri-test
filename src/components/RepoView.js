import { useParams } from "react-router-dom";
import { useGetRepoData } from "../hooks/useGetRepoData";
import { Readme } from "./Readme";

export function RepoView() {
  const urlParams = useParams();
  const { organisation, repo } = urlParams;
  const { data, isLoading, isError } = useGetRepoData(organisation, repo);

  if (isLoading) return <h1>loading...</h1>;
  if (isError) return <h1>Error with the request</h1>;

  const { name, html_url, owner } = data;

  const { login } = owner;

  return (
    <>
      <h1>
        Readme for{" "}
        <a href={html_url}>
          {login}/{name}
        </a>
      </h1>
      <Readme />
    </>
  );
}
