import { useRouter } from "next/router";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "./done.module.scss";

const Done = () => {
  const router = useRouter();

  return (
    <Container className={styles.done}>
      <Row className={styles.label}>
        <p className={styles.smile}>😎</p>
        <p>Done</p>
      </Row>
      <Row>
        <Col xs={12}>
          <Button onClick={() => {}}>Start new scan</Button>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Button
            variant="outline-primary"
            onClick={() => {
              router.push("/");
            }}
          >
            Back to main screen
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Done;
