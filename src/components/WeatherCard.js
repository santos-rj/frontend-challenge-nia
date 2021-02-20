import React from "react";

import "../assets/css/WeatherCard.css";
import "../assets/css/weather-icons.min.css";

function WeatherCard({ weatherData }) {
  const { city, weather, country, temp } = weatherData;
  const celcius = Math.round(temp);

  return (
    <div className="WeatherCard">
      <h1 className="WeatherCard-degrees">{celcius}°</h1>
      <div className="WeatherCard-icon-container">
        <i className={`wi wi-owm-${weather[0].id} WeatherCard-icon`} />
        <p>{weather[0].main}</p>
      </div>
      <h2 className="WeatherCard-city">
        {city}, {country}
      </h2>
    </div>
  );
}

export default WeatherCard;
