import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import InputWithButton from "../components/InputWithButton";
import NumberSelector from "../components/NumberSelector";
import styles from "./scan.module.scss";

const ScanPage = () => {
  const [scannedQuantity, setScannedQuantity] = useState(0);

  return (
    <Container className={styles.scan}>
      <div className={styles.main}>
        <Row>
          <h1 className="display-1">Scan item 📦</h1>
          <p>or enter code manually</p>
        </Row>
        <Row>
          <InputWithButton buttonText="OK" placeholder="Product code" />
        </Row>
        <Row className={styles.content}>
          <Col className={styles.labels}>
            <p>Name</p>
            <p>Code</p>
            <p>Quantity (w\h)</p>
          </Col>
          <Col>
            <p>Hello</p>
            <p>12345235</p>
            <p>2</p>
          </Col>
        </Row>
        <Row className={styles.quantity}>
          <p>Scanned quantity</p>
          <NumberSelector
            value={scannedQuantity}
            onChange={setScannedQuantity}
          />
        </Row>
      </div>
      <div className={styles.controls}>
        <Row>
          <Col xs={6}>
            <Button>Discard item</Button>
          </Col>
          <Col xs={6}>
            <Button>End session</Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Button>End session</Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default ScanPage;
