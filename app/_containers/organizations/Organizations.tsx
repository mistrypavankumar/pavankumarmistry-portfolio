import React from "react";
import "./Organizations.css";
// import OrganizationList from "../../components/organizationList/OrganizationList";
import OrganizationsData from "../../shared/opensource/organizations.json";
import OrganizationList from "@/app/_components/organizationList/OrganizationList";

const Organizations = () => {
  return (
    <div id="organizations">
      <div className="organizations-header-div">
        <h1 className="organizations-header text-secondary font-bold">
          Contributed Organizations
        </h1>
        <p className="organizations-subtitle text-text-secondary my-10">
          A collection of open-source organizations I&apos;ve contributed to
          through code, documentation, or community support.
        </p>
      </div>

      <OrganizationList logos={OrganizationsData["data"]} />
    </div>
  );
};

export default Organizations;
