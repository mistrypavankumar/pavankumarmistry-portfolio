"use client";

import PullRequestChart from "@/app/_components/pullRequestChart/PullRequestChart";
import "./OpensourceCharts.css";
import IssueChart from "@/app/_components/issueChart/IssueChart";

const OpensourceCharts = () => {
  return (
    <div>
      <div className="os-charts-header-div">
        <h1 className="os-charts-header text-secondary font-bold">
          Contributions
        </h1>
        <p className="os-charts-subtitle text-text-secondary mt-10">
          These visualizations highlight my open-source engagement through pull
          requests and issue contributions across various projects.
        </p>
      </div>
      <div className="os-charts-body-div mt-[50px]">
        <PullRequestChart />
        <IssueChart />
      </div>
    </div>
  );
};

export default OpensourceCharts;
