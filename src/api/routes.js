import config from "./../config.json";

const APIkey = config.APIKey;

const baseGeoURL = "http://api.openweathermap.org/geo/1.0";

const baseWeatherURL = "https://api.openweathermap.org/data/2.5";

const routes = {
  getCoordinatesByLocation: (cityName, stateCode, countryCode) =>
    `${baseGeoURL}/direct?q=${cityName},${stateCode},${countryCode}&limit=5&appid=${APIkey}`,
  getLocationByCoordinates: (lat, lon) =>
    `${baseGeoURL}/reverse?lat=${lat}&lon=${lon}}&limit=5&appid=${APIkey}`,
  getCurrentWeather: (lat, lon) =>
    `${baseWeatherURL}/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`,
  getForecast: (lat, lon) =>
    `${baseWeatherURL}/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`,
};

export default routes;
