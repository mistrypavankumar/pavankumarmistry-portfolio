import Link from "next/link";
import "./DegreeCard.css";

interface Degree {
  title: string;
  location: string;
  subtitle: string;
  logo_path: string;
  alt_name: string;
  duration: string;
  descriptions: string[];
  website_link: string;
}

interface DegreeProps {
  degree: Degree;
}

const DegreeCard: React.FC<DegreeProps> = ({ degree }) => {
  return (
    <div>
      <div className="shadow-2xl shadow-accent p-3 md:p-5 rounded-xl">
        <div className="body-header">
          <div className="body-header-title">
            <h2 className="card-title text-accent font-bold">
              {degree.title}
              <span className="text-[15px] italic ml-2">
                ({degree.location})
              </span>
            </h2>
            <h3 className="card-subtitle text-text-secondary">
              {degree.subtitle}
            </h3>
          </div>
          <div className="body-header-duration">
            <h3 className="duration text-secondary font-bold">
              {degree.duration}
            </h3>
          </div>
        </div>
        <div className="body-content">
          {degree.descriptions.map((sentence, index) => {
            return (
              <p key={index} className=" text-secondary py-2 text-[16px]">
                {sentence}
              </p>
            );
          })}
          <Link
            href={degree.website_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-fit flex bg-primary border-2 border-text-secondary group hover:bg-accent hover:border-accent rounded-[5px] p-2 float-right duration-500">
              <p className="text-text-secondary font-lato group-hover:text-secondary">
                Visit Website
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DegreeCard;
