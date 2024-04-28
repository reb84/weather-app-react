import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      Project coded by{" "}
      <a
        href="https://www.shecodes.io/graduates/97811-rebecca-upton"
        target="_blank"
        rel="noopener noreferrer"
      >
        Rebecca Upton
      </a>
      , is{" "}
      <a
        href="https://github.com/reb84/weather-app-react"
        target="_blank"
        rel="noopener noreferrer"
      >
        open-sourced
      </a>{" "}
      and hosted on{" "}
      <a
        href="https://weather-app-react-zeta-flame.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Vercel
      </a>
    </div>
  );
}
