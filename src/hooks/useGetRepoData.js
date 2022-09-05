import useSWR from "swr";
import { API_BASE } from "../constants";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function useGetRepoData(orgName, repoName) {
  const { data, error } = useSWR(
    `${API_BASE}/repos/${orgName}/${repoName}`,
    fetcher
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
