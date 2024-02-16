import { Link, Navigate, useParams } from "react-router-dom";
import { IssueComment } from "../components/IssueComment";
import { useIssue } from "../hooks";
import { LoadingIcon } from "../../shared/components/LoadingIcon";

const comment1 =
  "It would provide the ability to create a state, read the state \r\nand set the state form anywhere in the code base.\r\n\r\nIt would be something like this:\r\n\r\n## adding the state to the global state\r\n\r\n```js\r\nimport {useGlobalState} from 'react';\r\nconst ProviderComponent = ()=>{\r\n\r\n  const [ceateState, _, _] = useGlobalState();\r\n\r\n  createState('provider', 'stateName', 'state value');\r\n  createState('provider', 'otherStateName', 'another state value');\r\n  // or maybe, set all the states in one line\r\n  createState('provider', {stateName: 'state value', anotherStateName: 'another state value'});\r\n\r\n  return <></>\r\n}\r\n```\r\n\r\n##  now I can use it like so:\r\n\r\n```js\r\nimport {useGlobalState} from 'react';\r\n\r\nconst ConsumerComponent = ()=>{\r\n  \r\n  const [_, getState, setState] = useGlobalState();\r\n\r\n  const providerStateCpy = getState('key', 'stateName');\r\n\r\n  const changeProviderState = ()=>{\r\n    setState('key', 'stateName', 'new state value');\r\n  }\r\n  return <p onClick={changeProviderState}>{providerStateCpy}</p>\r\n}\r\n```\r\nI wonder if it's a possible thing without making major changes though.";

export const IssueView = () => {
  const params = useParams();
  const { id = "0" } = params;

  const { issueQuery, commentsQuery } = useIssue(+id);

  if (issueQuery.isLoading) return <LoadingIcon />;

  if (!issueQuery.data) return <Navigate to="/issues/list" />;

  return (
    <div className="row mb-5">
      <div className="col-12 mb-3">
        <Link to="./issues/list">Go Back</Link>
      </div>

      {/* Primer comentario */}
      <IssueComment issue={issueQuery.data} />

      {/* Comentario de otros */}
      {commentsQuery.isLoading && <LoadingIcon />}
      {commentsQuery.data?.map((issue) => (
        <IssueComment key={issue.id} issue={issue} />
      ))}
      {/* <IssueComment body={comment2} />
      <IssueComment body={comment3} /> */}
    </div>
  );
};
