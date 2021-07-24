import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { actionCreators } from "./store/index";

import Search from "./components/search/Search";
import Header from "./components/header/Header";
import Favorites from "./components/favorites/Favorites";

function App({
  getAllCities,
  setCity,
  setWeather,
  weather,
  cities,
  city,
  citiesError,
  restartState,
}) {

  return (
    <Router>
      <Header restartState={restartState}/>
      <Switch>
        <Route exact path="/">
          <Search
            cities={cities}
            getAllCities={getAllCities}
            setCity={setCity}
            setWeather={setWeather}
            weather={weather}
            city={city}
            error={citiesError}
            restartState={restartState}
          />
        </Route>
        <Route path="/favorites">
          <Favorites setCity={setCity} />
        </Route>
      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  cities: state.cities.cities,
  city: state.cities.city,
  weather: state.weather,
  citiesError: state.cities.error,
});

const dipatchActionToProps = {
  ...actionCreators,
};

export default connect(mapStateToProps, dipatchActionToProps)(App);
