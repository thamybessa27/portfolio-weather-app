import React, { useEffect, useState } from "react";
import styles from "./index.module.css";

const RainBackground = () => {
  const [dropsToRender, setDropsToRender] = useState([{ offset: 0, key: 0 }]);

  const makeItRain = () => {
    const drops = [];
    return setInterval(() => {
      if (drops.length > 40) drops.shift();
      const offset = Math.floor(Math.random() * 1500);
      const key = offset + Math.random() * 1000000;
      drops.push({ offset, key });
      setDropsToRender([...drops]);
    }, 200);
  };

  useEffect(() => {
    const id = makeItRain();
    console.log("id interval", id);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={styles.rainWeather}>
      {dropsToRender?.map((drop) => {
        return (
          <span
            key={drop.key}
            className={styles.rainDrops}
            style={{
              left: `${drop.offset}px`,
            }}
          />
        );
      })}
    </div>
  );
};

export default RainBackground;
