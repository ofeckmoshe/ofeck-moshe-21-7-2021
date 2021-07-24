import axios from 'axios';

export const getWeatherData = async (city) => {
    try{
        // return data[0];
        const weather = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${city}?apikey=s3CuwXyFEGusav1bh2jSNfEK3TJQFRGx`)
        .then(res => {
            return res;
        });
        // console.log(weather.data)
        return weather.data[0];
        
    }catch(error){
        console.log(error);
    }
}

export const getForecastData = async (city) => {
    try{
        // return forecast;
        const forecast = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${city}?apikey=s3CuwXyFEGusav1bh2jSNfEK3TJQFRGx`)
        .then(res => {
            return res;
        });
        return forecast.data;
        
    }catch(error){
        console.log(error);
    }
}

// const data = [
//     {
//       "LocalObservationDateTime": "2021-07-21T10:01:00+03:00",
//       "EpochTime": 1626850860,
//       "WeatherText": "Mostly cloudy",
//       "WeatherIcon": 6,
//       "HasPrecipitation": false,
//       "PrecipitationType": null,
//       "IsDayTime": true,
//       "Temperature": {
//         "Metric": {
//           "Value": 31.3,
//           "Unit": "C",
//           "UnitType": 17
//         },
//         "Imperial": {
//           "Value": 88.0,
//           "Unit": "F",
//           "UnitType": 18
//         }
//       },
//       "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
//       "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
//     }
//   ]

// const forecast = {
//   "Headline": {
//     "EffectiveDate": "2021-07-24T08:00:00+03:00",
//     "EffectiveEpochDate": 1627102800,
//     "Severity": 4,
//     "Text": "Pleasant this weekend",
//     "Category": "mild",
//     "EndDate": null,
//     "EndEpochDate": null,
//     "MobileLink": "http://www.accuweather.com/en/gr/athens/182536/extended-weather-forecast/182536?lang=en-us",
//     "Link": "http://www.accuweather.com/en/gr/athens/182536/daily-weather-forecast/182536?lang=en-us"
//   },
//   "DailyForecasts": [
//     {
//       "Date": "2021-07-22T07:00:00+03:00",
//       "EpochDate": 1626926400,
//       "Temperature": {
//         "Minimum": {
//           "Value": 76,
//           "Unit": "F",
//           "UnitType": 18
//         },
//         "Maximum": {
//           "Value": 90,
//           "Unit": "F",
//           "UnitType": 18
//         }
//       },
//       "Day": {
//         "Icon": 1,
//         "IconPhrase": "Sunny",
//         "HasPrecipitation": false
//       },
//       "Night": {
//         "Icon": 33,
//         "IconPhrase": "Clear",
//         "HasPrecipitation": false
//       },
//       "Sources": [
//         "AccuWeather"
//       ],
//       "MobileLink": "http://www.accuweather.com/en/gr/athens/182536/daily-weather-forecast/182536?day=1&lang=en-us",
//       "Link": "http://www.accuweather.com/en/gr/athens/182536/daily-weather-forecast/182536?day=1&lang=en-us"
//     },
//     {
//       "Date": "2021-07-23T07:00:00+03:00",
//       "EpochDate": 1627012800,
//       "Temperature": {
//         "Minimum": {
//           "Value": 75,
//           "Unit": "F",
//           "UnitType": 18
//         },
//         "Maximum": {
//           "Value": 89,
//           "Unit": "F",
//           "UnitType": 18
//         }
//       },
//       "Day": {
//         "Icon": 1,
//         "IconPhrase": "Sunny",
//         "HasPrecipitation": false
//       },
//       "Night": {
//         "Icon": 33,
//         "IconPhrase": "Clear",
//         "HasPrecipitation": false
//       },
//       "Sources": [
//         "AccuWeather"
//       ],
//       "MobileLink": "http://www.accuweather.com/en/gr/athens/182536/daily-weather-forecast/182536?day=2&lang=en-us",
//       "Link": "http://www.accuweather.com/en/gr/athens/182536/daily-weather-forecast/182536?day=2&lang=en-us"
//     },
//     {
//       "Date": "2021-07-24T07:00:00+03:00",
//       "EpochDate": 1627099200,
//       "Temperature": {
//         "Minimum": {
//           "Value": 74,
//           "Unit": "F",
//           "UnitType": 18
//         },
//         "Maximum": {
//           "Value": 90,
//           "Unit": "F",
//           "UnitType": 18
//         }
//       },
//       "Day": {
//         "Icon": 1,
//         "IconPhrase": "Sunny",
//         "HasPrecipitation": false
//       },
//       "Night": {
//         "Icon": 33,
//         "IconPhrase": "Clear",
//         "HasPrecipitation": false
//       },
//       "Sources": [
//         "AccuWeather"
//       ],
//       "MobileLink": "http://www.accuweather.com/en/gr/athens/182536/daily-weather-forecast/182536?day=3&lang=en-us",
//       "Link": "http://www.accuweather.com/en/gr/athens/182536/daily-weather-forecast/182536?day=3&lang=en-us"
//     },
//     {
//       "Date": "2021-07-25T07:00:00+03:00",
//       "EpochDate": 1627185600,
//       "Temperature": {
//         "Minimum": {
//           "Value": 74,
//           "Unit": "F",
//           "UnitType": 18
//         },
//         "Maximum": {
//           "Value": 90,
//           "Unit": "F",
//           "UnitType": 18
//         }
//       },
//       "Day": {
//         "Icon": 1,
//         "IconPhrase": "Sunny",
//         "HasPrecipitation": false
//       },
//       "Night": {
//         "Icon": 33,
//         "IconPhrase": "Clear",
//         "HasPrecipitation": false
//       },
//       "Sources": [
//         "AccuWeather"
//       ],
//       "MobileLink": "http://www.accuweather.com/en/gr/athens/182536/daily-weather-forecast/182536?day=4&lang=en-us",
//       "Link": "http://www.accuweather.com/en/gr/athens/182536/daily-weather-forecast/182536?day=4&lang=en-us"
//     },
//     {
//       "Date": "2021-07-26T07:00:00+03:00",
//       "EpochDate": 1627272000,
//       "Temperature": {
//         "Minimum": {
//           "Value": 78,
//           "Unit": "F",
//           "UnitType": 18
//         },
//         "Maximum": {
//           "Value": 93,
//           "Unit": "F",
//           "UnitType": 18
//         }
//       },
//       "Day": {
//         "Icon": 1,
//         "IconPhrase": "Sunny",
//         "HasPrecipitation": false
//       },
//       "Night": {
//         "Icon": 33,
//         "IconPhrase": "Clear",
//         "HasPrecipitation": false
//       },
//       "Sources": [
//         "AccuWeather"
//       ],
//       "MobileLink": "http://www.accuweather.com/en/gr/athens/182536/daily-weather-forecast/182536?day=5&lang=en-us",
//       "Link": "http://www.accuweather.com/en/gr/athens/182536/daily-weather-forecast/182536?day=5&lang=en-us"
//     }
//   ]
// }
