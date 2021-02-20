import React, { useState } from "react";

import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

import "./assets/css/App.css";

function App() {
  // Creating state variable
  const [state, setState] = useState({
    weatherData: {
      weather: "",
      city: "",
      country: "",
      temp: 0,
    },
    searchDone: false,
    savedCities: [],
    hasSavedCities: false,
    errorMessage: "",
  });

  function callWeatherData(city) {
    const url = `http://localhost:3001/weather?q=${city}`;
    console.log("rodou");

    /*
    api
      .get(`weather?q=${city}`)
      .then(handleErrors)
      .then((resp) => resp.json())
      .then((data) => {
        const weatherObj = {
          weather: data.weather,
          city: data.name,
          country: data.sys.country,
          temp: data.main.temp,
        };
        this.setState({
          weatherData: weatherObj,
          searchDone: true,
          errorMessage: "",
        });
      })
      .catch((error) => {
        // If an error is catch, it's sent to SearchBar as props
        this.setState({ errorMessage: error.message });
      });
    */

    fetch(url)
      .then(handleErrors)
      .then((resp) => resp.json())
      .then((data) => {
        const weatherObj = {
          weather: data.weather,
          city: data.name,
          country: data.sys.country,
          temp: data.main.temp,
        };
        setState((prevState) => {
          return {
            ...prevState,
            weatherData: weatherObj,
            searchDone: true,
            errorMessage: "",
          };
        });
      })
      .catch((error) => {
        // If an error is catch, it's sent to SearchBar as props
        setState((prevState) => {
          return { ...prevState, errorMessage: error.message };
        });
      });

    function handleErrors(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    }
  }

  const { searchDone, weatherData, errorMessage } = state;

  return (
    <div className="App">
      <SearchBar callBackFromParent={callWeatherData} error={errorMessage} />
      {searchDone && <WeatherCard weatherData={weatherData} />}
    </div>
  );
}

export default App;
