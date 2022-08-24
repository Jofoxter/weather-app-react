import React from "react";
import "./styles.css";


import Header from "./header.js";
import Image from "./spaceship.jpg";
import Button from "./button.js";
import Enginesearch from "./enginesearch.js";
import Forecast from "./forecast.js";
import Footer from "./footer.js";

export default function App() {
  return (
    <div className="App">
      <Header />
      <img src={Image} alt="" />
      <Enginesearch />
      <Button />
      <Forecast />
      <Footer />
    </div>
  );
}
