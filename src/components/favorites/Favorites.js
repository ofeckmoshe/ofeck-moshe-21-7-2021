import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import SingleCard from "../card/SingleCard";

const Favorites = ({setCity}) => {
  const [favorites, setFavorites] = useState({});
  const [error, setError] = useState(null);
  const  history = useHistory();
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    if (favorites && favorites.length) {
      setFavorites(favorites);
    } else {
      setError("there is no favorites locations");
    }
  }, []);

  const moveToCity = (city) => {
    setCity(city);
    history.push("/");
  }

  if (!error) {
    return (
      <div className="container text-white mt-3">
        <div className="row">
          {favorites.length && favorites.map((city) => {
            return (
              <div className="col-12 col-sm-6 col-md-4 mb-3" key={city.Key} onClick={() => moveToCity(city)}>
                <SingleCard
                  countryName={city.Country.LocalizedName}
                  cityName={city.LocalizedName}
                  cityKey={city.Key}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="container  errContainer">
        <div className="alert alert-danger err" role="alert">
          {error}
        </div>
      </div>
    );
  }
};

export default Favorites;
