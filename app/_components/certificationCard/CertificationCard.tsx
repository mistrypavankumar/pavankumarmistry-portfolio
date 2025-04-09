import Link from "next/link";
import "./CertificationCard.css";
import React from "react";

interface Certificate {
  title: string;
  subtitle: string;
  logo_path: string;
  certificate_link: string;
  alt_name: string;
  color_code: string;
}

interface CertificationCardProps {
  certificate: Certificate;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  certificate,
}) => {
  return (
    <div className="cert-card">
      <div className="content">
        <Link
          href={certificate.certificate_link}
          target="_blank"
          rel="noopener noreferrer"
          className="cert-link"
        >
          <div className="content-overlay"></div>
          <div
            className="cert-header"
            style={{ backgroundColor: certificate.color_code }}
          >
            {/* <img
              className="logo_img"
              src={
                require(`../../assests/images/${certificate.logo_path}`).default
              }
              alt={certificate.alt_name}
              loading="lazy"
            /> */}
          </div>
          <div className="content-details fadeIn-top">
            <h3 className="content-title">Certificate</h3>
          </div>
        </Link>
      </div>
      <div className="cert-body">
        <h2 className="cert-body-title text-secondary">{certificate.title}</h2>
        <h3 className="cert-body-subtitle text-text-secondary">
          {certificate.subtitle}
        </h3>
      </div>
    </div>
  );
};

export default CertificationCard;
