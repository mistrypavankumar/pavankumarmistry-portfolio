import { Icon } from "@iconify/react";

import "./SoftwareSkill.css";

const SoftwareSkill = ({ logos }: any) => {
  return (
    <div>
      <div className="software-skills-main-div mt-5">
        <ul className="dev-icons">
          {logos.map((logo: any) => (
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
