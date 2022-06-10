import { useState } from "react";
import routes from "./../../api/routes";

const useGetCurrentWeather = () => {
  const [currentWeather, setCurrentWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getCurrentWeather = async (lat, lon) => {
    const { getCurrentWeather } = routes;
    try {
      setIsLoading(true);
      const response = await fetch(getCurrentWeather(lat, lon));
      if (!response.ok) {
        return { statusCode: response.status, body: response.statusText };
      }
      const data = await response.json();
      console.log("result", data);
      setCurrentWeather(data);
    } catch (error) {
      console.log("error", error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getCurrentWeatherByCoordinates = async () => {
    navigator.geolocation.getCurrentPosition((result) => {
      const { latitude, longitude } = result.coords;
      return getCurrentWeather(latitude, longitude);
    });
  };

  return {
    currentWeather,
    isLoading,
    error,
    getCurrentWeatherByCoordinates,
  };
};

export default useGetCurrentWeather;
