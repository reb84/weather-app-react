import React from "react";
import WeatherForecast from "./WeatherForecast";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="weather-container">
        <div className="cwc-left">
          <div className="current-media-top">
            <div id="current-weather-icon">
              <img
                src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
                class="current-weather-icon"
              />
            </div>
            <div className="current-temp-container">
              <span className="current-temp-value" id="current-temp">
                20
              </span>
              <span className="current-temp-unit">°C</span>
            </div>
          </div>

          <div className="current-date-container">FRIDAY - 12 APRIL - 09:56</div>

          <div className="current-city">London</div>

          <div className="current-description">
            <div>
              <p class="current-details">
                <span id="description">overcast clouds</span>
                <br />
                Humidity: <strong id="humidity">73%</strong>
                <br />
                Wind: <strong id="wind-speed">4.92km/h</strong>
              </p>
            </div>
          </div>
          <div className="temp-switch">
            <a href="/" span id="switch-cel">
              C
            </a>{" "}
            /{" "}
            <a href="/" span id="switch-far">
              F
            </a>
          </div>
        </div>

        <div className="cwc-right">
          <div className="header-search-container">
            <form>
              <div className="search-form" id="search-form">
                <input
                  type="search"
                  class="form-control"
                  id="search-form-input"
                  placeholder="Enter a city.."
                />

                <button type="submit" value="Search" class="search-form-button">
                  submit
                </button>
              </div>

              <WeatherForecast />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
