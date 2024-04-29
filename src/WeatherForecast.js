import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="forecast-weather-container">
      <div className="weather-forecast-day">
        <div className="icon-container">
          <img
            src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
            className="forecast-icon"
          />
        </div>
        <div className="weather-forecast-date">Saturday</div>
        <div className="weather-forecast-temperature">
          <span className="forecast-temps-max">20</span> /
          <span className="forecast-temps-min">10</span> <span className="forecast-unit">ºC</span>
        </div>
      </div>

      <div className="weather-forecast-day">
        <div className="icon-container">
          <img
            src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
            className="forecast-icon"
          />
        </div>
        <div className="weather-forecast-date">Sunday</div>
        <div className="weather-forecast-temperature">
          <span className="forecast-temps-max">20</span> /
          <span className="forecast-temps-min">10</span> <span className="forecast-unit">ºC</span>
        </div>
      </div>

      <div className="weather-forecast-day">
        <div className="icon-container">
          <img
            src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
            className="forecast-icon"
          />
        </div>
        <div className="weather-forecast-date">Monday</div>
        <div className="weather-forecast-temperature">
          <span className="forecast-temps-max">20</span> /
          <span className="forecast-temps-min">10</span> <span className="forecast-unit">ºC</span>
        </div>
      </div>

      <div className="weather-forecast-day">
        <div className="icon-container">
          <img
            src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
            className="forecast-icon"
          />
        </div>
        <div className="weather-forecast-date">Tuesday</div>
        <div className="weather-forecast-temperature">
          <span className="forecast-temps-max">20</span> /
          <span className="forecast-temps-min">10</span> <span className="forecast-unit">ºC</span>
        </div>
      </div>

      <div className="weather-forecast-day">
        <div className="icon-container">
          <img
            src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
            className="forecast-icon"
          />
        </div>
        <div className="weather-forecast-date">Wednesday</div>
        <div className="weather-forecast-temperature">
          <span className="forecast-temps-max">20</span> /
          <span className="forecast-temps-min">10</span> <span className="forecast-unit">ºC</span>
        </div>
      </div>
    </div>
  );
}
