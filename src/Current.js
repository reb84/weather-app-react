import React from "react";
import "./Current.css";

export default function Current() {
  return (
    <div>
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
  );
}
