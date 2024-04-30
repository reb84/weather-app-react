import React from "react";
import CurrentDate from "./CurrentDate";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <div className="current-media-top">
        <div id="current-weather-icon">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="current-weather-icon"
          />
        </div>
        <div className="current-temp-container">
          <span className="current-temp-value">{Math.round(props.data.temperature)}</span>
          <span className="current-temp-unit">°C</span>
        </div>
      </div>

      <div className="current-date-container">
        <CurrentDate date={props.data.date} />
      </div>

      <div className="current-city">{props.data.city}</div>

      <div className="current-description">
        <ul>
          <li>{props.data.description}</li>
          <li>
            Humidity: <strong>{props.data.humidity}%</strong>
          </li>
          <li>
            Wind: <strong>{props.data.wind}km/h</strong>
          </li>
        </ul>
      </div>
      <div className="temp-switch">
        <a href="/">C</a> / <a href="/">F</a>
      </div>
    </div>
  );
}
