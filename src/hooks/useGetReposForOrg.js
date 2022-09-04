import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function useGetReposForOrg(orgName) {
  const { data, error } = useSWR(
    `https://api.github.com/orgs/${orgName}/repos`,
    fetcher
  );

  return {
    repos: data,
    isLoading: !error && !data,
    isError: error,
    // 'Fail' can occur if the organisation name doesn't exist or if the organisation has no public repos
    fail: data && !data.length,
    failMessage: data && data.message,
  };
}
