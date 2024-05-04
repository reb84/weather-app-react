import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherIcons from "./WeatherIcons";
import CurrentTemp from "./CurrentTemp";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <div className="current-media-top">
        <div className="current-weather-icon">
          <WeatherIcons code={props.data.icon} size={78} color="#ffffff" />
        </div>
        <CurrentTemp celsius={props.data.temperature} />
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
    </div>
  );
}
