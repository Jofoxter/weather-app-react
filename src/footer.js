import React from "react";

export default function Footer() {
  return (
    <div className="container">
      <div class Name="raw">
        <div className="col-md-12  d-block auto text-align-center">
          <span className="open-source">This project was coded by </span>
          <span className="linkedIn">
            <a href="https://www.linkedin.com/in/giorgia-francesca-costantino-55b01134/">
              Giorgia Francesca Costantino
            </a>
          </span>{" "}
          and is<span className="github"></span>
          <a
            href="https://github.com/Jofoxter/weather-app-react"
            target="_blank"
            rel="noopener">
            {" "}
            open-sourced on GitHub
          </a>
          <span> and</span>
          <span className="netlify">
            <a
              href="https://enchanting-gaufre-176960.netlify.app/"
              target="_blank"
              rel="noopener"
            >
              {" "}
              hosted on Netlifly.
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
