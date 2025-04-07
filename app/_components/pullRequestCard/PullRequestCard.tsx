import Link from "next/link";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { TbBrandStackshare } from "react-icons/tb";

import "./PullRequestCard.css";

const PullRequestCard = ({ pullRequest }: any) => {
  var iconPR;
  var bgColor;
  if (pullRequest["state"] === "OPEN") {
    iconPR = {
      iconifyClass: "octicon:git-pull-request",
      style: { color: "#28a745" },
    };
    bgColor = "#dcffe4";
  } else if (pullRequest["state"] === "MERGED") {
    iconPR = {
      iconifyClass: "octicon:git-merge",
      style: { color: "#00BCFF" },
    };
    bgColor = "#030712";
  } else {
    iconPR = {
      iconifyClass: "octicon:git-pull-request",
      style: { color: "#d73a49" },
    };
    bgColor = "#030712";
  }

  var subtitleString =
    "#" +
    pullRequest["number"] +
    " opened on " +
    pullRequest["createdAt"].split("T")[0];
  var mergedBy;
  if (pullRequest["mergedBy"] !== null) {
    const name = pullRequest["mergedBy"]["login"];
    mergedBy = (
      <OverlayTrigger
        key={name}
        placement={"top"}
        overlay={
          <Tooltip id={`tooltip-top`}>
            <strong>{`Merged by ${name}`}</strong>
          </Tooltip>
        }
      >
        <Link
          href={pullRequest["mergedBy"]["url"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="merge-by-img"
            src={pullRequest["mergedBy"]["avatarUrl"]}
            alt="user avatar"
          />
        </Link>
      </OverlayTrigger>
    );
  } else {
    mergedBy = <noscript></noscript>;
  }

  return (
    <div
      className="pull-request-card text-text-secondary"
      style={{
        backgroundColor: bgColor,
        border: `1px solid ${iconPR.style.color}`,
      }}
    >
      <div className="pr-top">
        <div className="pr-header">
          <div className="absolute">
            <TbBrandStackshare size={18} className="text-accent" />
          </div>
          <div className="pr-title-header">
            <p className="pr-title">
              <Link
                href={pullRequest["url"]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {pullRequest["title"]}
              </Link>
            </p>
            <p className="pr-subtitle">{subtitleString}</p>
          </div>
        </div>
        <div className="files-changed-header">
          <p
            className="files-changed-text"
            style={{ backgroundColor: iconPR.style.color }}
          >
            {pullRequest["changedFiles"]}
          </p>
          <p className="files-changed-text-2">Files Changed</p>
        </div>
      </div>
      <div className="pr-down">
        <div className="changes-repo">
          <p className="parent-repo">
            Repository:{" "}
            <Link
              style={{ color: iconPR.style.color }}
              href={pullRequest["baseRepository"]["url"]}
            >
              {pullRequest["baseRepository"]["owner"]["login"]}/
              {pullRequest["baseRepository"]["name"]}
            </Link>
          </p>
          <div className="changes-files">
            <p className="additions-files">
              <strong>{pullRequest["additions"]} + </strong>
            </p>
            <p className="deletions-files">
              <strong>{pullRequest["deletions"]} - </strong>
            </p>
            {mergedBy}
          </div>
        </div>
        <div
          className="owner-img-div"
          style={{
            backgroundColor: "#ffffff",
            height: "40px",
            width: "40px",
            borderRadius: "10%",
          }}
        >
          <Link
            href={pullRequest["baseRepository"]["owner"]["url"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="owner-img"
              style={{
                width: "100%",
              }}
              src={pullRequest["baseRepository"]["owner"]["avatarUrl"]}
              alt="user avatar"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PullRequestCard;
