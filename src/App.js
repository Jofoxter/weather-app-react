import React from "react";
import "./styles.css";


import Header from "./header.js";
import Image from "./spaceship.jpg";
import Button from "./button.js";
import Enginesearch from "./enginesearch.js";
import Humidity from "./humidity.js";
import Temperature from "./temperature";
import Forecast from "./forecast.js";
import Footer from "./footer.js";

export default function App() {
  return (
    <div className="App">
      <Header />
      <img src={Image} alt="" />
      <div className="actual-weather">
         <Enginesearch />
        <Humidity />
        <Temperature />
        <Button />
      </div>
      <div className=".forecast-box">
      <Forecast />
      </div>
      <Footer />
    </div>
  );
}

