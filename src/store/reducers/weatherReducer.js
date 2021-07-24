const weatherDataReducer = (
  state = {
    weatherData: null
  },
  action
) => {
  switch (action.type) {
    // case "SET_WEATHER":
    //   return { ...state, weatherData: action.payload };
    case "SET_CITY":
      return { ...state, weatherData: action.payload.weather };
    case "RESTART_STATE":
      return { ...state, weatherData: {} };
    default:
      return state;
  }
};

export default weatherDataReducer;
