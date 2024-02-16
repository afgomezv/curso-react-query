import { useQuery } from "@tanstack/react-query";
import { Issue } from "../interfaces";
import { githubApi } from "../../api/gtihubApi";
import { sleep } from "../../helpers/sleep";

const getIssueInfo = async (issueNumber: number): Promise<Issue> => {
  sleep(2);
  const { data } = await githubApi.get<Issue>(`/issues/${issueNumber}`);
  //console.log(data);

  return data;
};

const getIssueComments = async (issueNumber: number): Promise<Issue[]> => {
  sleep(2);
  const { data } = await githubApi.get<Issue[]>(
    `/issues/${issueNumber}/comments`
  );
  //console.log(data);
  return data;
};

export const useIssue = (issueNumber: number) => {
  const issueQuery = useQuery({
    queryKey: ["issue", issueNumber],
    queryFn: () => getIssueInfo(issueNumber),
  });

  const commentsQuery = useQuery({
    queryKey: ["issue", issueNumber, "comments"],
    queryFn: () => getIssueComments(issueQuery.data?.number as number),
    enabled: issueQuery.data !== undefined,
  });

  return {
    issueQuery,
    commentsQuery,
  };
};
