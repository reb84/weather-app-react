import React, { useState } from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: "https://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function search() {
    const apiKey = "a7fd89897e18b9862b380a75d7eee1ed";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="weather-container">
          <div className="cwc-left">
            <CurrentWeather data={weatherData} />
          </div>

          <div className="cwc-right">
            <div className="header-search-container">
              <form onSubmit={handleSubmit}>
                <div className="search-form">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Enter a city.."
                    onChange={handleCityChange}
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
    search();
    return "Loading the weather...";
  }
}
