import React from "react";
import "./WeatherForecast.css";
import WeatherIcons from "./WeatherIcons";

export default function WeatherForecast() {
  return (
    <div className="forecast-weather-container">
      <div className="weather-forecast-day">
        <div className="forecast-icon">
          <WeatherIcons code="50n" size={36} color="#8ca1b7" />
        </div>
        <div className="weather-forecast-date">Saturday</div>
        <div className="weather-forecast-temperature">
          <span className="forecast-temps-max">20</span> /
          <span className="forecast-temps-min">10</span> <span className="forecast-unit">ºC</span>
        </div>
      </div>
    </div>
  );
}
