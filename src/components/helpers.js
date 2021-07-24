import { getLocation } from '../serverAPI/cities';

export const getWeatherIcon = (weather, text = false) => {
  const time = new Date();
  let iconID;
  let iconPhrase;
  if (weather.Day) {
    if (time.getHours() < 23 && time.getHours() > 7) {
      iconID = weather.Day.Icon;
      iconPhrase = weather.Day.IconPhrase;
    } else {
      iconID = weather.Night.Icon;
      iconPhrase = weather.Night.IconPhrase;
    }
  } else {
    iconID = weather.icon;
    iconPhrase = text;
  }

  switch (true) {
    case iconID < 6:
      return (
        <div className="icon sunny">
          <div className="sun">
            <div className="rays"></div>
          </div>
          <div>{iconPhrase}</div>
        </div>
      );
    case iconID < 9:
      return (
        <div className="icon sun-shower">
          <div className="cloud"></div>
          <div className="sun">
            <div className="rays"></div>
          </div>
          <div className="rain"></div>
          <div>{iconPhrase}</div>
        </div>
      );
    case iconID < 11:
      return (
        <div className="icon cloudy">
          <div className="cloud"></div>
          <div className="cloud"></div>
          <div>{iconPhrase}</div>
        </div>
      );
    case iconID < 14:
      return (
        <div className="icon rainy">
          <div className="cloud"></div>
          <div className="rain"></div>
          <div>{iconPhrase}</div>
        </div>
      );
    case iconID < 17:
      return (
        <div className="icon thunder-storm">
          <div className="cloud"></div>
          <div className="lightning">
            <div className="bolt"></div>
            <div className="bolt"></div>
          </div>
          <div>{iconPhrase}</div>
        </div>
      );
    case iconID < 19:
      return (
        <div className="icon rainy">
          <div className="cloud"></div>
          <div className="rain"></div>
          <div>{iconPhrase}</div>
        </div>
      );
    case iconID < 22:
      return (
        <div className="icon sun-shower">
          <div className="cloud"></div>
          <div className="sun">
            <div className="rays"></div>
          </div>
          <div className="rain"></div>
          <div>{iconPhrase}</div>
        </div>
      );
    case iconID < 24:
      return (
        <div className="icon flurries">
          <div className="cloud"></div>
          <div className="snow">
            <div className="flake"></div>
            <div className="flake"></div>
          </div>
          <div>{iconPhrase}</div>
        </div>
      );
    case iconID < 30:
      return (
        <div className="icon rainy">
          <div className="cloud"></div>
          <div className="rain"></div>
          <div>{iconPhrase}</div>
        </div>
      );
    case iconID < 39:
      return (
        <div className="icon cloudy">
          <div className="cloud"></div>
          <div className="cloud"></div>
          <div>{iconPhrase}</div>
        </div>
      );
    case iconID < 45:
      return (
        <div className="icon rainy">
          <div className="cloud"></div>
          <div className="rain"></div>
          <div>{iconPhrase}</div>
        </div>
      );
    default:
      return (
        <div className="icon sunny">
          <div className="sun">
            <div className="rays"></div>
          </div>
          <div>{iconPhrase}</div>
        </div>
      );
  }
};

export const maxMinTemp = (min, max) => {
  if (max && min) {
    const celMin = (5 * (min - 32)) / 9;
    const celMax = (5 * (max - 32)) / 9;
    return (
      <h3 className="d-flex justify-content-around">
        <span>{Math.floor(celMin)}&deg;</span>
        <span>{Math.floor(celMax)}&deg;</span>
      </h3>
    );
  }
};

export const getDayOfWeek = (date) => {
  const dayOfWeek = new Date(date).getDay();
  return isNaN(dayOfWeek)
    ? null
    : [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ][dayOfWeek];
};

const containsObject = (obj, arr) => {
  let cell;
  let index = 0;
  for (cell in arr) {
    if (arr[cell].Key === obj.Key) {
      return { contain: true, index: index };
    }
    index += 1;
  }

  return { contain: false, index: index };
};

export const handleSave = (city) => {
  const prevStorage = JSON.parse(localStorage.getItem("favorites"));
  if (!prevStorage) {
    const storage = [city];
    localStorage.setItem("favorites", JSON.stringify(storage));
  } else {
    if (containsObject(city, prevStorage).contain) {
      return;
    }
    prevStorage.push(city);
    localStorage.setItem("favorites", JSON.stringify(prevStorage));
  }
};

export const handleDelete = (city) => {
  const prevStorage = JSON.parse(localStorage.getItem("favorites"));
  if (!prevStorage) {
    return;
  } else {
    const objIsContain = containsObject(city, prevStorage);
    if (objIsContain.contain) {
      prevStorage.splice(objIsContain.index, 1);
      localStorage.setItem("favorites", JSON.stringify(prevStorage));
      return;
    }
  }
};


export const getCurLocation = (setFunc) => {
  let errorText;
  let latitude;
  let longitude;
  const success = async (position) => {
    latitude  = position.coords.latitude;
    longitude = position.coords.longitude;
    const city = await getLocation({latitude, longitude})
    if(city){
      setFunc(city.EnglishName);
    }
  }


  const error = () => {
    errorText = 'Unable to retrieve your location, please enable your browser location services';
    setFunc(null , errorText);
  }

  if(!navigator.geolocation) {
    errorText = 'Geolocation is not supported by your browser';
    setFunc(null , errorText);
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
};