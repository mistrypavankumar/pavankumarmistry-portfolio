import Link from "next/link";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { TbBrandStackshare } from "react-icons/tb";
import "./PullRequestCard.css";
import { PullRequest } from "@/app/libs/pullRequest";

interface PullRequestCardProps {
  pullRequest: PullRequest;
}

const PullRequestCard = ({ pullRequest }: PullRequestCardProps) => {
  // Determine icon and background color based on PR state
  const getPRStateStyles = () => {
    switch (pullRequest.state) {
      case "OPEN":
        return {
          iconColor: "#28a745",
          bgColor: "#dcffe4",
          iconType: "octicon:git-pull-request" as const,
        };
      case "MERGED":
        return {
          iconColor: "#00BCFF",
          bgColor: "#030712",
          iconType: "octicon:git-merge" as const,
        };
      default: // CLOSED
        return {
          iconColor: "#d73a49",
          bgColor: "#030712",
          iconType: "octicon:git-pull-request" as const,
        };
    }
  };

  const { iconColor, bgColor } = getPRStateStyles();
  const formattedDate = new Date(pullRequest.createdAt).toLocaleDateString();
  const subtitleString = `#${pullRequest.number} opened on ${formattedDate}`;

  const renderMergedBy = () => {
    if (!pullRequest.mergedBy) return null;

    return (
      <OverlayTrigger
        placement="top"
        overlay={
          <Tooltip>
            <strong>{`Merged by ${pullRequest.mergedBy.login}`}</strong>
          </Tooltip>
        }
      >
        <Link
          href={pullRequest.mergedBy.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="merge-by-img"
            src={pullRequest.mergedBy.avatarUrl}
            alt={`${pullRequest.mergedBy.login}'s avatar`}
          />
        </Link>
      </OverlayTrigger>
    );
  };

  return (
    <div
      className="pull-request-card text-text-secondary"
      style={{
        backgroundColor: bgColor,
        border: `1px solid ${iconColor}`,
      }}
    >
      <div className="pr-top">
        <div className="pr-header">
          <div className="absolute">
            <TbBrandStackshare size={18} className="text-accent" />
          </div>
          <div className="pr-title-header">
            <h3 className="pr-title">
              <Link
                href={pullRequest.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {pullRequest.title}
              </Link>
            </h3>
            <p className="pr-subtitle">{subtitleString}</p>
          </div>
        </div>
        <div className="files-changed-header">
          <span
            className="files-changed-text"
            style={{ backgroundColor: iconColor }}
          >
            {pullRequest.changedFiles}
          </span>
          <span className="files-changed-text-2">Files Changed</span>
        </div>
      </div>

      <div className="pr-down">
        <div className="changes-repo">
          <p className="parent-repo">
            Repository:{" "}
            <Link
              style={{ color: iconColor }}
              href={pullRequest.baseRepository.url}
            >
              {pullRequest.baseRepository.owner.login}/
              {pullRequest.baseRepository.name}
            </Link>
          </p>
          <div className="changes-files">
            <span className="additions-files">
              <strong>{pullRequest.additions} + </strong>
            </span>
            <span className="deletions-files">
              <strong>{pullRequest.deletions} - </strong>
            </span>
            {renderMergedBy()}
          </div>
        </div>

        <div className="owner-img-div">
          <Link
            href={pullRequest.baseRepository.owner.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="owner-img"
              src={pullRequest.baseRepository.owner.avatarUrl}
              alt={`${pullRequest.baseRepository.owner.login}'s avatar`}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PullRequestCard;
