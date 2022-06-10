import React, { useState } from "react";
import PillInputButton from "../PillInputButton";
import WALogo from "./../../img/logo.png";
import styles from "./index.module.css";

const Header = () => {
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const today = new Date().toLocaleDateString("en-US", dateOptions);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (value) => setSearchValue(value);

  return (
    <header className={`header ${styles.header}`}>
      <div className={styles.container}>
        <img src={WALogo} alt="Weather App logo" className={styles.logo} />
        <span>{today}</span>
      </div>
      <PillInputButton
        value={searchValue}
        onChangeInput={handleSearchChange}
        placeholder="Enter city name"
        btnText="Search"
      />
    </header>
  );
};

export default Header;
