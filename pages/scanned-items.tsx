import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ProductItem from "../components/ProductItem";
import styles from "./scanned-items.module.scss";

const ScannedItems = () => {
  return (
    <Container className={styles["scanned-items"]}>
      <div className={styles.main}>
        <Row className={styles.heading}>
          <h1 className="display-1">Scanned items ✨</h1>
        </Row>
        <Row>
          <ProductItem
            name="Product item"
            quanity={10}
            onQuantityChange={() => {}}
            className={styles["product-item"]}
          />
          <ProductItem
            name="Product item"
            quanity={10}
            onQuantityChange={() => {}}
            className={styles["product-item"]}
          />
          <ProductItem
            name="Product item"
            quanity={10}
            onQuantityChange={() => {}}
            className={styles["product-item"]}
          />
          <ProductItem
            name="Product item"
            quanity={10}
            onQuantityChange={() => {}}
            className={styles["product-item"]}
          />
          <ProductItem
            name="Product item"
            quanity={10}
            onQuantityChange={() => {}}
            className={styles["product-item"]}
          />
          <ProductItem
            name="Product item"
            quanity={10}
            onQuantityChange={() => {}}
            className={styles["product-item"]}
          />
          <ProductItem
            name="Product item"
            quanity={10}
            onQuantityChange={() => {}}
            className={styles["product-item"]}
          />
          <ProductItem
            name="Product item"
            quanity={10}
            onQuantityChange={() => {}}
            className={styles["product-item"]}
          />
          <ProductItem
            name="Product item"
            quanity={10}
            onQuantityChange={() => {}}
            className={styles["product-item"]}
          />
          <ProductItem
            name="Product item"
            quanity={10}
            onQuantityChange={() => {}}
            className={styles["product-item"]}
          />
          <ProductItem
            name="Product item"
            quanity={10}
            onQuantityChange={() => {}}
            className={styles["product-item"]}
          />
          <ProductItem
            name="Product item"
            quanity={10}
            onQuantityChange={() => {}}
            className={styles["product-item"]}
          />
          <ProductItem
            name="Product item"
            quanity={10}
            onQuantityChange={() => {}}
            className={styles["product-item"]}
          />
          <ProductItem
            name="Product item"
            quanity={10}
            onQuantityChange={() => {}}
            className={styles["product-item"]}
          />
        </Row>
      </div>
      <div>
        <Row>
          <Col xs={6}>
            <Button variant="outline-primary">Back to scanning</Button>
          </Col>
          <Col xs={6}>
            <Button>End session</Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default ScannedItems;
