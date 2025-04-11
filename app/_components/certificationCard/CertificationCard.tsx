import Link from "next/link";
import "./CertificationCard.css";
import React from "react";
import Image from "next/image";

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
    <div className="w-[400px] md:w-[200px] h-[300px] hover:w-[700px] duration-300 hover:z-10 -translate-x-3.5 overflow-hidden bg-white border-2 border-accent shadow-2xl shadow-accent rounded-xl">
      <Link
        href={certificate.certificate_link}
        target="_blank"
        rel="noopener noreferrer"
        className="h-full w-full block"
      >
        <div className="bg-white min-w-[400px] h-[300px] relative">
          <Image
            src={`/assets/images/certificates/${certificate.logo_path}`}
            alt={certificate.alt_name}
            fill
            className="object-contain"
            quality={85}
            sizes="(max-width: 768px) 100vw, 400px"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-gradient-to-t from-accent transition-opacity duration-300">
            <h3 className="text-white text-xl font-bold">View Certificate</h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CertificationCard;
