import React from "react";
import "./WeatherForecast.css";
import WeatherIcons from "./WeatherIcons";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  const apiKey = "bd3bb6534458ba51b48c49f5155745b6";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;

  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

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
