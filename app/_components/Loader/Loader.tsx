"use client";

import { useEffect, useState } from "react";

import "./Loader.css";

export const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reset loading state when route changes
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-primary overflow-hidden z-50 fixed top-0 right-0 left-0 bottom-0">
      <div className="flex justify-center items-center h-full w-full bg-black bg-opacity-80">
        <div className="sharingan">
          {/* Outer Ring (Red) */}
          <div className="outer-ring">
            {/* Inner Black Circle */}
            <div className="inner-circle">
              {/* Pupil */}
              <div className="pupil"></div>
            </div>

            {/* Three Tomoe (Rotating) */}
            <div className="tomoe-container">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`tomoe tomoe-${i}`}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
