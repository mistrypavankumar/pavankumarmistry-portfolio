import React from "react";
import "./Skills.css";
import { skills } from "@/app/libs/portfolio";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";
import SoftwareSkill from "./SoftwareSkill";

function GetSkillSvg({ fileName }: { fileName: string }) {
  if (fileName === "DataScienceImg") return <DataScienceImg />;
  else if (fileName === "FullStackImg") return <FullStackImg />;
  else if (fileName === "CloudInfraImg") return <CloudInfraImg />;
  return <DesignImg />;
}

const SkillSection = () => {
  return (
    <div>
      {skills.data.map((skill, index) => {
        const isEven = index % 2 === 0;
        return (
          <div key={index} className="skills-main-div">
            {isEven ? (
              <>
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} />
                </div>
                <div className="skills-text-div">
                  <h1 className="skills-heading text-secondary pb-10">
                    {skill.title}
                  </h1>
                  <div>
                    {skill.skills.map((skillSentence, index) => {
                      return (
                        <p
                          key={skillSentence + index}
                          className="subTitle skills-text text-text-secondary py-2.5"
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </div>
              </>
            ) : (
              <>
                <div className="skills-text-div">
                  <h1 className="skills-heading text-secondary pb-10">
                    {skill.title}
                  </h1>
                  <div>
                    {skill.skills.map((skillSentence, index) => {
                      return (
                        <p
                          key={skillSentence + index}
                          className="subTitle skills-text text-text-secondary py-2.5"
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </div>
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} />
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SkillSection;
