import React from "react";
import WeatherIcons from "./WeatherIcons";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="weather-forecast-day">
        <div className="forecast-icon">
          <WeatherIcons code={props.data.weather[0].icon} size={36} color="#8ca1b7" />
        </div>
        <div className="weather-forecast-date">{day()}</div>
        <div className="weather-forecast-temperature">
          <span className="forecast-temps-max">{maxTemperature()}</span> /
          <span className="forecast-temps-min">{minTemperature()}</span>{" "}
          <span className="forecast-unit">ºC</span>
        </div>
      </div>
    </div>
  );
}
