import React from "react";
import Current from "./Current";
import Search from "./Search";
import Forecast from "./Forecast";
import Footer from "./Footer";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="container">
      <div className="weather-container">
        <div className="cwc-left">
          <Current />
        </div>

        <div className="cwc-right">
          <Search />
          <Forecast />
        </div>
      </div>

      <Footer />
    </div>
  );
}
