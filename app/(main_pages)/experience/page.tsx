import Image from "next/image";
import { experience } from "@/app/libs/portfolio";

import "./Experience.css";

function Experience() {
  return (
    <div className="experience-main">
      <div className="basic-experience">
        <div className="experience-heading-div">
          <div className="experience-heading-img-div">
            <Image
              src={"/assets/images/Application programming.png"}
              alt=""
              width={800}
              height={300}
            />
          </div>
          <div className="experience-heading-text-div">
            <h1 className="experience-heading-text text-secondary">
              {experience.title}
            </h1>
            <h3 className="experience-heading-sub-text text-secondary">
              {experience["subtitle"]}
            </h3>
            <p className="experience-header-detail-text subTitle text-text-secondary">
              {experience["description"]}
            </p>

            <div className="arrows-container">
              <div className="arrow arrow-large"></div>
              <div className="arrow first"></div>
              <div className="arrow second"></div>
              <div className="arrow third"></div>
            </div>
          </div>
        </div>
      </div>
      {/* <ExperienceAccordion sections={experience["sections"]} theme={theme} /> */}
    </div>
  );
}

export default Experience;
