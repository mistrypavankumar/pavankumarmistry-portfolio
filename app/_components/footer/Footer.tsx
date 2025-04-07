import { greeting } from "@/app/libs/portfolio";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-div">
      <p className="footer-text text-text-secondary">
        Made with <span role="img">❤️</span> by {greeting.title}
      </p>
    </div>
  );
}
