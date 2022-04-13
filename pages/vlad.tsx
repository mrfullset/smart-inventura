import React, { useState } from "react";
import styles from "./vlad.module.scss";

const vlad = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className={styles.vlad}>
      {counter}
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        SUKA
      </button>
    </div>
  );
};

export default vlad;
