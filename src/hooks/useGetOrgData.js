import useSWR from "swr";
import { API_BASE } from "../constants";

// noinspection JSCheckFunctionSignatures
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function useGetOrgData(orgName) {
  const { data, error } = useSWR(`${API_BASE}/orgs/${orgName}/repos`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    // 'Fail' can occur if the organisation name doesn't exist or if the organisation has no public repos
    fail: data && !data.length,
    failMessage: data && data.message,
  };
}
