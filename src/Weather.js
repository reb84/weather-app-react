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
      coordinates: response.data.coord,
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      feels: response.data.main.feels_like,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      description: response.data.weather[0].description,
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
    const apiKey = "bd3bb6534458ba51b48c49f5155745b6";
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
                <WeatherForecast coordinates={weatherData.coordinates} />
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
