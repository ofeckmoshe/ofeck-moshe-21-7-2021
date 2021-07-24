import axios from "axios";

export const getCities = async (char) => {
  try {
    const cities = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=%09s3CuwXyFEGusav1bh2jSNfEK3TJQFRGx&q=${char}`)
    .then(res => {
        return res;
    });
    return cities.data;
    // return cities;
  } catch (error) {
    console.log(error);
  }
};

export const getCity = async (city) => {
  try {
    const cities = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=%09s3CuwXyFEGusav1bh2jSNfEK3TJQFRGx&q=${city}`)
    .then(res => {
        return res;
    });
    return cities.data[0];
    // return {
    //   Version: 1,
    //   Key: "182536",
    //   Type: "City",
    //   Rank: 10,
    //   LocalizedName: "Athens",
    //   Country: {
    //     ID: "GR",
    //     LocalizedName: "Greece",
    //   },
    //   AdministrativeArea: {
    //     ID: "I",
    //     LocalizedName: "Attica",
    //   },
    // };
  } catch (error) {
    console.log(error);
  }
};

export const getLocation = async (position) => {
  try {
    const location = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=%09s3CuwXyFEGusav1bh2jSNfEK3TJQFRGx&q=${position.latitude}%2C%20${position.longitude}`)
    .then(res => {
          return res;
      });
      return location.data;
    // return {
    //   Version: 1,
    //   Key: "215760",
    //   Type: "City",
    //   Rank: 95,
    //   LocalizedName: "Nakahlat Yitskhak",
    //   ParentCity: {
    //     EnglishName: "Tel Aviv",
    //     Key: "215854",
    //     LocalizedName: "Tel Aviv",
    //   },
    // };
  } catch (error) {
    console.log(error);
  }
};

// const cities = [
//   {
//     Version: 1,
//     Key: "182536",
//     Type: "City",
//     Rank: 10,
//     LocalizedName: "Athens",
//     Country: {
//       ID: "GR",
//       LocalizedName: "Greece",
//     },
//     AdministrativeArea: {
//       ID: "I",
//       LocalizedName: "Attica",
//     },
//   },
//   {
//     Version: 1,
//     Key: "316938",
//     Type: "City",
//     Rank: 10,
//     LocalizedName: "Ankara",
//     Country: {
//       ID: "TR",
//       LocalizedName: "Turkey",
//     },
//     AdministrativeArea: {
//       ID: "06",
//       LocalizedName: "Ankara",
//     },
//   },
//   {
//     Version: 1,
//     Key: "126995",
//     Type: "City",
//     Rank: 11,
//     LocalizedName: "Alexandria",
//     Country: {
//       ID: "EG",
//       LocalizedName: "Egypt",
//     },
//     AdministrativeArea: {
//       ID: "ALX",
//       LocalizedName: "Alexandria",
//     },
//   },
//   {
//     Version: 1,
//     Key: "56912",
//     Type: "City",
//     Rank: 13,
//     LocalizedName: "Anqing",
//     Country: {
//       ID: "CN",
//       LocalizedName: "China",
//     },
//     AdministrativeArea: {
//       ID: "AH",
//       LocalizedName: "Anhui",
//     },
//   },
//   {
//     Version: 1,
//     Key: "59083",
//     Type: "City",
//     Rank: 15,
//     LocalizedName: "Anyang",
//     Country: {
//       ID: "CN",
//       LocalizedName: "China",
//     },
//     AdministrativeArea: {
//       ID: "HA",
//       LocalizedName: "Henan",
//     },
//   },
//   {
//     Version: 1,
//     Key: "102138",
//     Type: "City",
//     Rank: 15,
//     LocalizedName: "Anshan",
//     Country: {
//       ID: "CN",
//       LocalizedName: "China",
//     },
//     AdministrativeArea: {
//       ID: "LN",
//       LocalizedName: "Liaoning",
//     },
//   },
//   {
//     Version: 1,
//     Key: "202438",
//     Type: "City",
//     Rank: 15,
//     LocalizedName: "Ahmedabad",
//     Country: {
//       ID: "IN",
//       LocalizedName: "India",
//     },
//     AdministrativeArea: {
//       ID: "GJ",
//       LocalizedName: "Gujarat",
//     },
//   },
//   {
//     Version: 1,
//     Key: "2093",
//     Type: "City",
//     Rank: 20,
//     LocalizedName: "Algiers",
//     Country: {
//       ID: "DZ",
//       LocalizedName: "Algeria",
//     },
//     AdministrativeArea: {
//       ID: "16",
//       LocalizedName: "Alger",
//     },
//   },
//   {
//     Version: 1,
//     Key: "126831",
//     Type: "City",
//     Rank: 20,
//     LocalizedName: "Addis Ababa",
//     Country: {
//       ID: "ET",
//       LocalizedName: "Ethiopia",
//     },
//     AdministrativeArea: {
//       ID: "AA",
//       LocalizedName: "Addis Ababa",
//     },
//   },
//   {
//     Version: 1,
//     Key: "178551",
//     Type: "City",
//     Rank: 20,
//     LocalizedName: "Accra",
//     Country: {
//       ID: "GH",
//       LocalizedName: "Ghana",
//     },
//     AdministrativeArea: {
//       ID: "AA",
//       LocalizedName: "Greater Accra",
//     },
//   },
// ];