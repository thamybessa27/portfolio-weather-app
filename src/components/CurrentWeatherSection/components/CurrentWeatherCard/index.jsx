import React from "react";
import PropTypes from "prop-types";
import Card from "../../../Card";
import styles from "./index.module.css";

const CurrentWeatherCard = ({
  cityName,
  minTemp,
  maxTemp,
  weather,
  actualTemp,
  isLoading,
}) => {
  return (
    <Card title={cityName} centerAligned isLoading={isLoading}>
      <ul className={styles.list}>
        <li>{parseFloat(actualTemp).toFixed(0)}˚C</li>
        <li>{weather}</li>
        <li>min: {parseFloat(minTemp).toFixed(0)}˚C</li>
        <li>max: {parseFloat(maxTemp).toFixed(0)}˚C</li>
      </ul>
    </Card>
  );
};

CurrentWeatherCard.propTypes = {
  cityName: PropTypes.string.isRequired,
  minTemp: PropTypes.string.isRequired,
  maxTemp: PropTypes.string.isRequired,
  weather: PropTypes.string.isRequired,
  actualTemp: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default CurrentWeatherCard;
