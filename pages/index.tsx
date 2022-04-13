import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import NumberSelector from "../components/NumberSelector";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Home: NextPage = () => {
  const [value, setValue] = useState(0);

  const onNumberChange = (value: number) => {
    if (value < 0) {
      return;
    }
    setValue(value);
  };

  return (
    <div className={styles.container}>
      <NumberSelector value={value} onChange={onNumberChange} />
    </div>
  );
};

export default Home;
