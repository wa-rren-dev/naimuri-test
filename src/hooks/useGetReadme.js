import useSWR from "swr";

// noinspection JSCheckFunctionSignatures
const fetcher = (...args) => fetch(...args).then((res) => res.text());

export function useGetReadme(orgName, repoName) {
  const { data, error } = useSWR(
    `https://raw.githubusercontent.com/${orgName}/${repoName}/master/README.md`,
    fetcher
  );

  if (data === "404: Not Found")
    return { markdown: false, isLoading: false, isError: false };

  return {
    markdown: data,
    isLoading: !error && !data,
    isError: error,
  };
}
