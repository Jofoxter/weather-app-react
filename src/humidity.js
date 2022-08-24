import React from "react";

export default function Humidity() {
  return (
    <div className="humidity-wind">
      <div className="row">
        <div className="col">
          Humidity: <span id="humidity"></span>
          <span>%</span>
        </div>
        <div className="row"></div>
        <div className="col">
          Wind: <span id="wind"></span>
          <span>km/h</span>
        </div>
      </div>
    </div>
  );
}
