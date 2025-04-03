import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    // Process the forecast data from the 5-day forecast endpoint
    const dailyForecast = [];
    const dailyMap = {};

    // Group forecast entries by day
    response.data.list.forEach((item) => {
      // Get the date without time
      const date = new Date(item.dt * 1000).toDateString();

      if (!dailyMap[date]) {
        // Format the data to match what WeatherForecastDay expects
        dailyMap[date] = {
          dt: item.dt,
          temp: {
            day: item.main.temp,
            min: item.main.temp_min,
            max: item.main.temp_max,
          },
          weather: item.weather,
        };
        dailyForecast.push(dailyMap[date]);
      } else {
        // Update max temperature if we find a higher one
        if (item.main.temp_max > dailyMap[date].temp.max) {
          dailyMap[date].temp.max = item.main.temp_max;
        }
        // Update min temperature if we find a lower one
        if (item.main.temp_min < dailyMap[date].temp.min) {
          dailyMap[date].temp.min = item.main.temp_min;
        }
      }
    });

    setForecast(dailyForecast);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="weather-forecast-container">
        {forecast.map(function (dailyForecast, index) {
          if (index < 6) {
            return (
              <div key={index}>
                <WeatherForecastDay data={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    const apiKey = "bd3bb6534458ba51b48c49f5155745b6";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
