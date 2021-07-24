import { getCities, getCity } from "../../serverAPI/cities";
import { getForecastData } from "../../serverAPI/weather";

export const getAllCities = (char) => async (dispatch) => {
  try {
    const res = await getCities(char);
    const cities = res.length ? res : [];
    if (!cities) {
      dispatch({
        type: "ERROR_GET_CITIES",
        payload: "There is some problem with the api response",
      });
      return;
    }
    dispatch({ type: "GET_CITIES", payload: cities });
  } catch (error) {
    dispatch({
      type: "ERROR_GET_CITIES",
      payload: "There is some problem with the api response",
    });
  }
};

export const setCities = (cities) => {
  return (dispatch) => {
    dispatch({ type: "SET_CITIES", payload: cities.length ? cities : [] });
  };
};

export const setCity =
  (cityName, error = null) =>
  async (dispatch) => {
    if (!error && cityName) {
      try {
        const cityRes = await getCity(cityName);
        const city = cityRes ? cityRes : {};
        const weatherRes = await getForecastData(city.Key);
        const weather = weatherRes ? weatherRes : {};
        if (!city) {
          dispatch({
            type: "ERROR_SET_CITY",
            payload: { error: "Location not found, Please try again later..." },
          });
          return;
        }
        if (!weatherRes) {
          dispatch({
            type: "ERROR_SET_CITY",
            payload: { error: "Location not found, Please try again later..." },
          });
          return;
        }
        dispatch({ type: "SET_CITY", payload: { city, weather } });
      } catch (error) {
        dispatch({
          type: "ERROR_SET_CITY",
          payload: { error: error },
        });
      }
    }else{
      dispatch({
        type: "ERROR_SET_CITY",
        payload: { error: error },
      });
    }
  };

export const restartState = () => (dispatch) => {
  dispatch({ type: "RESTART_STATE" });
};
