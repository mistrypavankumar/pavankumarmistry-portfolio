import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

import { greeting } from "@/app/libs/portfolio";
import SocialMedia from "@/app/_components/socialMedia/SocialMedia";

import FeelingProud from "./FeelingProud";

import "./Greeting.css";

function Greeting() {
  return (
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div className="text-secondary">
            <h1 className="greeting-hi text-secondary pb-4 md:pb-12 font-lato font-bold">
              Hi,
            </h1>
            <h1 className="greeting-title pb-4 md:pb-12 font-lato font-bold">
              I&apos;m <span className="text-accent">{greeting.title}</span>
            </h1>
            <h2 className="greeting-subtitle">{greeting.subTitle}</h2>
            <p className="text-[15px] md:text-[18px]">{greeting.body}</p>

            <div className="h-[15px]" />
            <SocialMedia />

            <div className="greeting-buttons cursor-pointer">
              <div className="flex w-full justify-center">
                <Link
                  href="#"
                  className="primary-btn"
                  style={{ fontWeight: "bold" }}
                >
                  Hire Me
                </Link>
              </div>
              <div className="inside-greeting-buttons">
                <FaArrowRight size={"20px"} />
              </div>
            </div>
          </div>
        </div>
        <div className="greeting-image-div">
          <FeelingProud />
        </div>
      </div>
    </div>
  );
}

export default Greeting;
