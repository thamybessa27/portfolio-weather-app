import React from "react";
import PropTypes from "prop-types";
import style from "./index.module.css";

const Loading = ({ size = "large" }) => {
  return (
    <div className={style.container}>
      <div className={`${style.spinAnimation} ${style[size]}`} />
    </div>
  );
};

Loading.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default Loading;
