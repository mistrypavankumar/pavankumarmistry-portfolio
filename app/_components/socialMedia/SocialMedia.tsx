import Link from "next/link";

import {
  FaGithub,
  FaLinkedin,
  FaGoogle,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

import "./SocialMedia.css";

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/mistrypavankumar",
    fontAwesomeIcon: FaGithub, // Reference https://react-icons.github.io/react-icons/search/#q=github
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mistry-pavan-kumar-5067b21b1/",
    fontAwesomeIcon: FaLinkedin, // Reference https://react-icons.github.io/react-icons/search/#q=linkedin
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:pavansharma.m0114si@gmail.com",
    fontAwesomeIcon: FaGoogle, // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/pavan.mistry.143mg.77/",
    fontAwesomeIcon: FaFacebook, // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/pavan_kumar143mg/",
    fontAwesomeIcon: FaInstagram, // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

export default function SocialMedia() {
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((media, index) => {
        return (
          <Link
            key={index}
            href={media.link}
            className={`icon-button`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon IconComponent={media.fontAwesomeIcon} />
          </Link>
        );
      })}
    </div>
  );
}

const Icon = ({ IconComponent }: { IconComponent: any }) => {
  return <IconComponent className="text-[1.35rem]" />;
};
