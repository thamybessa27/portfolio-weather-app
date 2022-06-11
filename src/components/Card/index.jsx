import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.css";
import Loading from "../Loading";

const Card = ({ title, children, small, centerAligned, isLoading }) => {
  return (
    <div className={`${styles.card} ${small && styles.small}`}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h2>{title}</h2>
          <div
            className={`${styles.cardBody} ${centerAligned && styles.center}`}
          >
            {children}
          </div>
        </>
      )}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  small: PropTypes.bool,
  centerAligned: PropTypes.bool,
  isLoading: PropTypes.bool.isRequired,
};

export default Card;
