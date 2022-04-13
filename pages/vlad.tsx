import React, { useState } from "react";
import styles from "./vlad.module.scss";

const vlad = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className={styles.vlad}>
      {counter}
    <div className={styles.pageContent}>
        <div className={styles.name}>
          KAPYBARA S.R.O
        </div>

      <div className={styles.warehouses}>
        <div className={styles.warehouse}>
          Scan warehouse ID 🏭
        </div>

        <div className={styles.warehouse}>
          Or choose it
        </div>

        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          SUKA
        </button> 
        </div>
      </div>
    </div>
  );
};

export default vlad;
