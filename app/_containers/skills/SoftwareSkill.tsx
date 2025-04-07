import { Icon } from "@iconify/react";
import "./SoftwareSkill.css";

interface SoftwareSkillLogo {
  skillName: string;
  fontAwesomeClassname: string;
  style?: React.CSSProperties;
}

const SoftwareSkill = ({ logos }: { logos: SoftwareSkillLogo[] }) => {
  return (
    <div>
      <div className="software-skills-main-div mt-5">
        <ul className="dev-icons">
          {logos.map((logo) => (
            <li
              key={logo.skillName}
              className="software-skill-inline"
              title={logo.skillName}
            >
              <Icon icon={logo.fontAwesomeClassname} style={logo.style} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SoftwareSkill;
