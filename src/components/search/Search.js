import React, { useState, useEffect } from "react";

import Autocomplete from "react-autocomplete";
import Forecast from "../weatherView/Forecast";

import { getCurLocation } from '../helpers';

import '../../App.css';

const Search = ({
  cities,
  getAllCities,
  setCity,
  weather,
  city,
  error,
}) => {
  const [cityName, setCityName] = useState("");
  const [showForecast, setShowForecast] = useState(false);

  useEffect(() => {
    getCurLocation(setCity);
  }, [])

  useEffect(() => {
    if (weather.weatherData) {
      setShowForecast(true);
    } else {
      setShowForecast(false);
    }
  }, [weather]);

  const onChangeHandler = (char) => {
    if (char.length === 0) {
      return;
    }
    getAllCities(char);
    setCityName(char);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(cityName);
  };

    return (
      <div className="container">
        <div className="row justify-content-center mt-3 mb-3">
          <div className="col-auto p-0">
            <button
              onClick={handleSubmit}
              className="btn btn-secondary"
              style={{ height: "2em" }}
            >
              Search
            </button>
          </div>
          <div className="col-auto p-0 " style={{ zIndex: "9" }}>
            <Autocomplete
              inputProps={{
                style: {
                  height: "2em",
                },
                placeholder: "Search city",
              }}
              getItemValue={(item) => item.LocalizedName}
              items={cities}
              renderItem={(item, isHighlighted) => (
                <div
                  style={{ background: isHighlighted ? "lightgray" : "white" }}
                  key={item.Key}
                >
                  {item.LocalizedName}
                </div>
              )}
              value={cityName}
              onChange={(e) => onChangeHandler(e.target.value)}
              onSelect={(val) => setCityName(val)}
            />
          </div>
        </div>
        {showForecast ? <Forecast weather={weather} city={city} error={error} /> : <div className="container errContainer">
        <div className="alert alert-danger err" role="alert">
          {error}
        </div>
      </div>}
      </div>
    );
};

export default Search;
