import Organizations from "@/app/_containers/organizations/Organizations";
import OpensourceCharts from "@/app/_containers/opensourceCharts/OpensourceCharts";
import PullRequests from "@/app/_containers/pullRequests/PullRequests";

import "./OpenSource.css";

const Opensource = () => {
  return (
    <div className="opensource-main">
      <Organizations />
      <div className="mb-[120px]" />
      <OpensourceCharts />
      <div className="mb-[200px]" />
      <PullRequests />
    </div>
  );
};

export default Opensource;
