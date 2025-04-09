import Image from "next/image";
import education_img from "@/public/assests/images/education.svg";

import Educations from "@/app/_containers/education/Educations";
import CompetitiveSites from "@/app/_components/competitiveSites/CompetitiveSites";
import Certifications from "@/app/_containers/certifications/Certifications";
import { competitiveSites } from "@/app/libs/portfolio";

import "./Education.css";

const Education = () => {
  return (
    <div className="education-main">
      <div className="basic-education">
        <div className="heading-div">
          <div className="heading-text-div">
            <h1 className="heading-text text-secondary font-lato">Education</h1>
            <h3 className="heading-sub-text text-secondary font-lato">
              Basic Qualification and Certifcations
            </h3>
            <CompetitiveSites logos={competitiveSites.competitiveSites} />
          </div>
          <div className="heading-img-div">
            <Image src={education_img} width={700} alt="Education image" />;
          </div>
        </div>
        <Educations />
        <Certifications />
      </div>
    </div>
  );
};

export default Education;
