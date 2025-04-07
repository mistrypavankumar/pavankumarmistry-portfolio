import PullRequestCard from "@/app/_components/pullRequestCard/PullRequestCard";
import pullRequestsData from "@/app/shared/opensource/pull_requests.json";

import "./PullRequests.css";

const PullRequests = () => {
  return (
    <div>
      <div className="pull-requests-header-div">
        <h1 className="pull-requests-header text-secondary font-bold">
          Pull Requests
        </h1>
      </div>
      <div className="pull-request-body-div mt-10">
        {pullRequestsData["data"].map((pullRequest) => {
          return (
            <PullRequestCard key={pullRequest.id} pullRequest={pullRequest} />
          );
        })}
      </div>
    </div>
  );
};

export default PullRequests;
