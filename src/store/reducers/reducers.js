import { combineReducers } from 'redux';
import weatherDataReducer from './weatherReducer';
import citiesReducer from './citiesReducer';

const reducers = combineReducers({
    weather: weatherDataReducer,
    cities: citiesReducer
});

export default reducers;