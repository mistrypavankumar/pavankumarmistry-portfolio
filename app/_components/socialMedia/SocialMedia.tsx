import Link from "next/link";
import type { IconType } from "react-icons";
import {
  FaGithub,
  FaLinkedin,
  FaGoogle,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

import "./SocialMedia.css";

const socialMediaLinks: {
  name: string;
  link: string;
  fontAwesomeIcon: IconType;
  backgroundColor: string;
}[] = [
  {
    name: "Github",
    link: "https://github.com/mistrypavankumar",
    fontAwesomeIcon: FaGithub,
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mistry-pavan-kumar-5067b21b1/",
    fontAwesomeIcon: FaLinkedin,
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:pavansharma.m0114si@gmail.com",
    fontAwesomeIcon: FaGoogle,
    backgroundColor: "#D14836",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/pavan.mistry.143mg.77/",
    fontAwesomeIcon: FaFacebook,
    backgroundColor: "#1877F2",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/pavan_kumar143mg/",
    fontAwesomeIcon: FaInstagram,
    backgroundColor: "#E4405F",
  },
];

export default function SocialMedia() {
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((media, index) => (
        <Link
          key={index}
          href={media.link}
          className="icon-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon IconComponent={media.fontAwesomeIcon} />
        </Link>
      ))}
    </div>
  );
}

const Icon = ({ IconComponent }: { IconComponent: IconType }) => {
  return <IconComponent className="text-[1.35rem]" />;
};
