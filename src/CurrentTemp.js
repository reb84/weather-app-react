import React, { useState } from "react";

export default function CurrentTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="current-temp-container">
        <span className="current-temp-value">{Math.round(props.celsius)}</span>
        <span className="current-temp-unit">
          °C
          <div className="link-temp">
            F
            <a href="/" onClick={showFahrenheit}>
              <span className="temp-switch"></span>
            </a>
          </div>
        </span>
      </div>
    );
  } else {
    return (
      <div className="current-temp-container">
        <span className="current-temp-value">{Math.round(fahrenheit())}</span>
        <span className="current-temp-unit">
          °F
          <div className="link-temp">
            C
            <a href="/" onClick={showCelsius}>
              <span className="temp-switch"></span>
            </a>
          </div>
        </span>
      </div>
    );
  }
}
