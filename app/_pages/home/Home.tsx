import Header from "@/app/_components/header/Header";
import { portfolioTheme } from "@/app/libs/theme";
import React from "react";

function HomePage() {
  const theme = portfolioTheme;

  return (
    <div>
      <Header />
    </div>
  );
}

export default HomePage;
