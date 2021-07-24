const citiesReducer = (state = {
    cities: [],
    city:{}
}, action) => {
    switch (action.type) {
        case "GET_CITIES":
            return {...state, cities: action.payload};
        case "SET_CITY":
            return {...state, city: action.payload.city, error: null};
        case "ERROR_SET_CITY":
            return {...state, error: action.payload.error};
        case "ERROR_GET_CITIES":
            return {...state, error: action.payload.error};
        case "RESTART_STATE":
            return {...state, city: {}, cites: [], error: null};
        default:
            return state;
    }
};

export default citiesReducer;