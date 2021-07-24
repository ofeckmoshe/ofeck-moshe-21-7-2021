import React, { useEffect, useState } from "react";
import { getWeatherIcon } from "../helpers";
import { getWeatherData } from "../../serverAPI/weather";
import "../weatherView/weather.css";

const SingleCard = ({ countryName, cityName, cityKey }) => {
  const [icon, setIcon] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [text, setText] = useState(null);

  useEffect(() => {
    const setWeather = async () => {
      const weather = await getWeatherData(cityKey);
      if (weather) {
        setIcon(weather.WeatherIcon);
        setTemperature(weather.Temperature.Metric.Value);
        setText(weather.WeatherText);
      }
    };
    setWeather();
  }, []);

  return (
    <div className="container myCard spring-fever">
      <div className="row justify-content-center">
        {getWeatherIcon({ icon: icon }, text)}
      </div>

      <h2 className="text-center">{temperature}&deg;</h2>

      <h4 className="py-3 text-center">{cityName}</h4>
      <h5 className="py-3 text-center">{countryName}</h5>
    </div>
  );
};

export default SingleCard;
