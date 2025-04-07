import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
// import SkillSection from "./SkillSection";

function Skills() {
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <h1 className="skills-header text-secondary">What I Do?</h1>
      </div>
      <SkillSection />
    </div>
  );
}

export default Skills;
