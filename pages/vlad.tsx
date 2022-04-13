import React, { useEffect, useState } from "react";
import styles from "./vlad.module.scss";
import { Button, Form } from "react-bootstrap";

const vlad = () => {
  const [counter, setCounter] = useState(0);
  let [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    let t = 't';
    let url = "https://inventura.flexibee.eu/v2/c/firma4/sklad?detail=full";
    fetch(url, {
      method: 'GET',
      headers: {
        Authorization: 'Basic YWRtaW40OmFkbWluNGFkbWluNA==',
        Accept: 'application/json',
      },
    })
    .then(res => res.json())
    .then(
      (result) => {
        setWarehouses(result.winstrom.sklad);
  
       console.log(warehouses.length);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  


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
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" className={styles.warehouseInput} placeholder="TEST ID" />
          </Form.Group>
        </Form>
        <div className={styles.warehouse}>
          Or choose it
        </div>
          <div>
          {
            warehouses.map(wh => 
            <div className={styles.warehouseItem}> {wh.nazev} </div>)
          }
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
