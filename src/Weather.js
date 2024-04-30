import React, { useState } from "react";
import axios from "axios";
import CurrentDate from "./CurrentDate";
import WeatherForecast from "./WeatherForecast";

import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: "https://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="weather-container">
          <div className="cwc-left">
            <div className="current-media-top">
              <div id="current-weather-icon">
                <img
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                  className="current-weather-icon"
                />
              </div>
              <div className="current-temp-container">
                <span className="current-temp-value">{Math.round(weatherData.temperature)}</span>
                <span className="current-temp-unit">°C</span>
              </div>
            </div>

            <div className="current-date-container">
              <CurrentDate date={weatherData.date} />
            </div>

            <div className="current-city">{weatherData.city}</div>

            <div className="current-description">
              <ul>
                <li>{weatherData.description}</li>
                <li>
                  Humidity: <strong>{weatherData.humidity}%</strong>
                </li>
                <li>
                  Wind: <strong>{weatherData.wind}km/h</strong>
                </li>
              </ul>
            </div>
            <div className="temp-switch">
              <a href="/">C</a> / <a href="/">F</a>
            </div>
          </div>

          <div className="cwc-right">
            <div className="header-search-container">
              <form>
                <div className="search-form" id="search-form">
                  <input
                    type="search"
                    className="form-control"
                    id="search-form-input"
                    placeholder="Enter a city.."
                  />

                  <button type="submit" value="Search" className="search-form-button">
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
  } else {
    const apiKey = "a7fd89897e18b9862b380a75d7eee1ed";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading the weather...";
  }
}
