import { useParams } from "react-router-dom";
import { useGetReadme } from "../hooks/useGetReadme";
import ReactMarkdown from "react-markdown";
import s from "./Readme.module.scss";

export function Readme() {
  const urlParams = useParams();
  const { organisation, repo } = urlParams;
  const { markdown, isLoading, isError } = useGetReadme(organisation, repo);

  if (isLoading) return <h1 aria-live="assertive">Loading readme</h1>;
  if (isError) return <h1>Error with the request</h1>;

  if (markdown === false)
    return (
      <div>
        <h2>Sorry!</h2>
        <p>
          The readme from this repo isn't named "README.MD". You can try{" "}
          <a
            href={`https://github.com/${organisation}/${repo}/tree/master`}
            aria-label={`Open this repo on Github in a new tab (${repo})`}
          >
            visiting the repo directly
          </a>{" "}
          to see if there's a readme.
        </p>
      </div>
    );

  return (
    <div className={s.container}>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}
