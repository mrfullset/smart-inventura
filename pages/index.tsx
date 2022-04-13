import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { Button, Col, Row, Container, Form } from "react-bootstrap";
import InputWithButton from "../components/InputWithButton";
import { NextPage } from "next";
import { getCatalog, getWarehouses } from "../service/api.service";
import { start } from "../service/LocalStorageService";

const Home: NextPage = () => {
  const [counter, setCounter] = useState(0);
  let [warehouses, setWarehouses] = useState<any[]>([]);
  let [selectedWarehouse, setSelectedWarehouse] = useState({});

  useEffect(() => {
    let t = "t";
    getWarehouses().then(
      (result) => {
        setWarehouses(result.winstrom.sklad);

        console.log(warehouses.length);
      },
      (error) => {
        console.log(error);
      }
    );

    getCatalog("10007").then(
      (result) => {
        debugger;
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <Container className={styles.sklad}>
      <div className={styles.pageContent}>
        <Row>
          <h1 className={styles.name + " display-1"}>KAPYBARA S.R.O</h1>
        </Row>

        <Row>
          <div className={styles.warehouses}>
            <div className={styles.warehouse}>Scan warehouse ID 🏭</div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <InputWithButton buttonText="OK" placeholder="TEST ID" />
                {/* <Form.Control type="email" className={styles.warehouseInput} placeholder="" /> */}
              </Form.Group>
            </Form>
            <div className={styles.warehouse}>or choose it</div>
            <div className={styles.warehouseList}>
              {warehouses.map((wh) => (
                <div className={styles.warehouseItem}> {wh.nazev} </div>
              ))}
            </div>
          </div>
        </Row>
      </div>
    </Container>
  );
};

export default Home;
