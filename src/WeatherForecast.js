import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="weather-forecast-container">
        <WeatherForecastDay data={forecast[1]} />
        <WeatherForecastDay data={forecast[2]} />
        <WeatherForecastDay data={forecast[3]} />
        <WeatherForecastDay data={forecast[4]} />
        <WeatherForecastDay data={forecast[5]} />
        <WeatherForecastDay data={forecast[6]} />
      </div>
    );
  } else {
    const apiKey = "bd3bb6534458ba51b48c49f5155745b6";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;

    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
