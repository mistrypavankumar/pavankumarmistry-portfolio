import CertificationCard from "@/app/_components/certificationCard/CertificationCard";
import { certifications } from "@/app/libs/portfolio";

import "./Certifications.css";

const Certifications = () => {
  return (
    <div className="main my-12" id="certs">
      <div className="certs-header-div">
        <h1 className="certs-header text-secondary font-bold mb-10">
          Certifications
        </h1>
      </div>
      <div className="flex justify-center items-center flex-wrap md:flex-nowrap w-full gap-10 md:gap-0">
        {certifications.certifications.map((cert, index) => {
          return <CertificationCard key={index} certificate={cert} />;
        })}
      </div>
    </div>
  );
};

export default Certifications;
