import React from "react";

import {
  getWeatherIcon,
  maxMinTemp,
  getDayOfWeek,
  handleSave,
  handleDelete,
} from "../helpers";

import "./weather.css";
import "../../App.css";

const Forecast = ({ weather, city, error = null }) => {
  if (!error) {
    return (
      <div className="container text-light forecast">
        <div className="col-12">
          <h1 className="text-center" style={{wordSpacing: '0.3em'}}>{city.LocalizedName}</h1>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-3">
          {weather.weatherData.DailyForecasts &&
            weather.weatherData.DailyForecasts.map((data) => {
              return (
                <div className="col p-2" key={data.Date}>
                  <div className="container myCard spring-fever">
                    <div className="row justify-content-center">
                      {getWeatherIcon(data)}
                    </div>

                    {maxMinTemp(
                      data.Temperature.Minimum.Value,
                      data.Temperature.Maximum.Value
                    )}

                    <h4 className="py-3 text-center">
                      {getDayOfWeek(data.Date)}
                    </h4>
                  </div>
                </div>
              );
            })}
        </div>

        {weather.weatherData.DailyForecasts && (
          <div className="btn-group-vertical mt-3">
              <button
                className="btn-save"
                onClick={() => handleSave(city)}
              >
                Save
              </button>
              <button
                className="btn-delete"
                onClick={() => handleDelete(city)}
              >
                Delete
              </button>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="container  errContainer">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }
};

export default Forecast;
