import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.css";

const PillInputButton = ({ value, onChangeInput, placeholder, btnText }) => {
  return (
    <form className={styles.pill}>
      <input
        value={value}
        onChange={({ target }) => onChangeInput(target.value)}
        className={styles.pillInput}
        placeholder={placeholder}
      />
      <button className={styles.pillBtn}>{btnText}</button>
    </form>
  );
};

PillInputButton.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
};

export default PillInputButton;
