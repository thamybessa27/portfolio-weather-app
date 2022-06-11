import React, { useEffect } from "react";
import useGetCurrentWeather from "../../hooks/useGetCurrentWeather";
import CurrentWeatherCard from "./components/CurrentWeatherCard";

const CurrentWeatherSection = () => {
  const { currentWeather, isLoading, error, getCurrentWeatherByCoordinates } =
    useGetCurrentWeather();

  const { weather, main, name } = currentWeather;

  console.log("error", error);

  useEffect(() => {
    getCurrentWeatherByCoordinates();
  }, []);

  return (
    <section className="currentWeather">
      <h1>Current Weather</h1>
      <CurrentWeatherCard
        cityName={name || ""}
        maxTemp={main?.temp_max || "0"}
        minTemp={main?.temp_min || "0"}
        weather={weather ? weather[0]?.main : ""}
        actualTemp={main?.temp || "0"}
        isLoading={isLoading}
      />
    </section>
  );
};

export default CurrentWeatherSection;
