import Image from "next/image";

import DegreeCard from "@/app/_components/degreeCard/DegreeCard";
import { degrees } from "@/app/libs/portfolio";

import "./Educations.css";

const Educations = () => {
  return (
    <div className="main" id="educations">
      <div className="educations-header-div mb-12">
        <h1 className="educations-header text-secondary font-bold">
          Degrees Received
        </h1>
      </div>

      <div className="flex justify-between items-center flex-col-reverse md:flex-row">
        <div>
          <Image
            src={"/assets/images/graduation.svg"}
            width={700}
            height={600}
            alt="graduation image"
          />
        </div>
        <div className="flex flex-col gap-14">
          {degrees.degrees.map((degree, index) => {
            return <DegreeCard key={index} degree={degree} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Educations;
