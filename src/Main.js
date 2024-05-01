import React from "react";
import Weather from "./Weather";
import "./Main.css";

export default function Main() {
  return (
    <div className="container">
      <Weather defaultCity="London" />
      <div className="footer-container">
        Project coded by{" "}
        <a href="https://www.shecodes.io/graduates/97811-rebecca-upton" target="_blank">
          Rebecca Upton
        </a>
        , is{" "}
        <a href="https://github.com/reb84/weather-app-react" target="_blank">
          open-sourced
        </a>{" "}
        and hosted on <a href="https://weather-app-react-zeta-flame.vercel.app/">Vercel</a>
      </div>
    </div>
  );
}
