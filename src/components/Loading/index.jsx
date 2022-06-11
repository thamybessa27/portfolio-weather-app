import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.css";

const Loading = ({ size = "medium" }) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.spinAnimation} ${styles[size]}`} />
    </div>
  );
};

Loading.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default Loading;
