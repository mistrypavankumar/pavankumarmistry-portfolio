import PullRequestCard from "@/app/_components/pullRequestCard/PullRequestCard";
import pullRequestsData from "@/app/shared/opensource/pull_requests.json";
import { PullRequest } from "@/app/libs/pullRequest";
import "./PullRequests.css";

const PullRequests = () => {
  // Type assertion for the imported JSON data
  const pullRequests: PullRequest[] = pullRequestsData.data as PullRequest[];

  return (
    <div className="pull-requests-container">
      <div className="pull-requests-header-div">
        <h1 className="pull-requests-header text-secondary font-bold">
          Pull Requests
        </h1>
      </div>

      <div className="pull-request-body-div mt-10">
        {pullRequests.map((pullRequest) => (
          <PullRequestCard key={pullRequest.id} pullRequest={pullRequest} />
        ))}
      </div>
    </div>
  );
};

export default PullRequests;
