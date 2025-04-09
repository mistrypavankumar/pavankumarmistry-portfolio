import Link from "next/link";
import { IconType } from "react-icons";

import "./CompetitiveSites.css";

interface CompetitiveSite {
  siteName: string;
  iconName: IconType;
  style?: {
    color?: string;
  };
  profileLink: string;
}

interface CompetitiveSitesProps {
  logos: CompetitiveSite[];
}

const CompetitiveSites: React.FC<CompetitiveSitesProps> = ({ logos }) => {
  return (
    <div className="competitive-sites-main-div">
      <ul className="dev-icons flex justify-center items-center gap-5">
        {logos.map((logo: CompetitiveSite) => {
          return (
            <li
              key={logo.siteName}
              className="w-[70px] h-[70px] bg-secondary flex items-center justify-center rounded-xl overflow-hidden"
              style={logo.style}
              title={logo.siteName}
            >
              <Link
                href={logo.profileLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={logo.siteName}
              >
                <logo.iconName style={logo.style} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CompetitiveSites;
