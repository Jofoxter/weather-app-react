import React from "react";

export default function Temperature() {
  return (
    <div className="actual-weather">
      <h2 id="city"></h2>
      <p className="actual-day-time-wx"></p>
      <p className="actual-day-time-wx" id="wx-description">
        <br />
        <br />
      </p>
      <p>
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
          alt="sunny"
          class="actual-icon"
          id="icon"
        />
        <span className="actual-temperature" id="temperature"></span>
        <span className="grads">°C </span>
      </p>
    </div>
  );
}
