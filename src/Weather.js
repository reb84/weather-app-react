import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="weather-container">
        <div className="header-search">
          <form className="search-form" id="search-form">
            <input
              type="search"
              placeholder="Enter a city.."
              required
              id="search-form-input"
              className="search-form-input"
            />
            <input type="submit" value="Search" className="search-form-button" />
          </form>
        </div>
        <div className="current-main">
          <div className="current-where">
            <h1 className="current-city" id="current-city">
              London
            </h1>
          </div>
          <div className="current-when">
            <span id="current-date">SUNDAY - 7 APRIL - 10:19</span>
          </div>
          <div className="current-temp-container">
            <div id="current-weather-icon">
              <img
                src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
                className="weather-icon"
              />
            </div>
            <div className="current-temp-value" id="current-temp">
              14
            </div>
            <div className="current-temp-unit">°C</div>
          </div>
        </div>

        <div className="current-extra">
          <div>
            <p className="current-details">
              <span id="description">broken clouds</span>
              <br />
              Humidity: <strong id="humidity">68%</strong>, Wind:
              <strong id="wind-speed">8.75km/h</strong>
            </p>
          </div>
        </div>

        <div className="weather-forecast" id="forecast">
          <div className="weather-forecast-day">
            <div className="weather-forecast-date">Mon</div>
            <img
              src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
              className="forecast-icon"
            />
            <div className="forecast-temps">
              <div className="weather-forecast-temperature">
                <span className="weather-temp-max">15º</span>/
                <span className="weather-temp-min">11º</span>
              </div>
            </div>
          </div>

          <div className="weather-forecast-day">
            <div className="weather-forecast-date">Tue</div>
            <img
              src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
              className="forecast-icon"
            />
            <div className="forecast-temps">
              <div className="weather-forecast-temperature">
                <span className="weather-temp-max">15º</span>/
                <span className="weather-temp-min">11º</span>
              </div>
            </div>
          </div>

          <div className="weather-forecast-day">
            <div className="weather-forecast-date">Wed</div>
            <img
              src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
              className="forecast-icon"
            />
            <div className="forecast-temps">
              <div className="weather-forecast-temperature">
                <span className="weather-temp-max">15º</span>/
                <span className="weather-temp-min">11º</span>
              </div>
            </div>
          </div>

          <div className="weather-forecast-day">
            <div className="weather-forecast-date">Thu</div>
            <img
              src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
              className="forecast-icon"
            />
            <div className="forecast-temps">
              <div className="weather-forecast-temperature">
                <span className="weather-temp-max">15º</span>/
                <span className="weather-temp-min">11º</span>
              </div>
            </div>
          </div>

          <div className="weather-forecast-day">
            <div className="weather-forecast-date">Fri</div>
            <img
              src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
              className="forecast-icon"
            />
            <div className="forecast-temps">
              <div className="weather-forecast-temperature">
                <span className="weather-temp-max">15º</span>/
                <span className="weather-temp-min">11º</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-element">
        <p>
          <a href="https://github.com/reb84/weather-app-react" target="_blank">
            Open-source code
          </a>{" "}
          by Rebecca Upton. Hosted{" "}
          <a href="https://weather-app-react-zeta-flame.vercel.app/" target="_blank">
            on Vercel
          </a>
          .
        </p>
      </div>
    </div>
  );
}
