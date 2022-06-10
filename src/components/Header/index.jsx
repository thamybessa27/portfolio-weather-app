import React from "react";
import WALogo from "./../../img/logo.png";
import styles from "./index.module.css";

const Header = () => {
  return (
    <header>
      <img src={WALogo} alt="Weather App logo" className={styles.logo} />
    </header>
  );
};

export default Header;
