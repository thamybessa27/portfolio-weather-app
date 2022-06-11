import React from "react";
import PropTypes from "prop-types";
import Card from "../../../Card";
import styles from "./index.module.css";

const ForecastCard = ({ weekDay, minTemp, maxTemp, weather, isLoading }) => {
  return (
    <Card title={weekDay} centerAligned isLoading={isLoading} small>
      <span className={`material-symbols-outlined ${styles.weather}`}>
        sunny
      </span>
      <ul className={styles.list}>
        <li>{weather}</li>
        <li>min: {parseFloat(minTemp).toFixed(0)}˚C</li>
        <li>max: {parseFloat(maxTemp).toFixed(0)}˚C</li>
      </ul>
      <button className={styles.btn}>
        <span className="material-symbols-outlined">add</span>More details
      </button>
    </Card>
  );
};

export default ForecastCard;
ForecastCard.propTypes = {
  weekDay: PropTypes.string.isRequired,
  minTemp: PropTypes.string.isRequired,
  maxTemp: PropTypes.string.isRequired,
  weather: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
