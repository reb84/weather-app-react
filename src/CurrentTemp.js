import React, { useState } from "react";

export default function CurrentTemp(props) {
  return (
    <div className="current-temp-container">
      <span className="current-temp-value">{Math.round(props.celsius)}</span>
      <span className="current-temp-unit">°C</span>
    </div>
  );
}
