import { useRouter } from "next/router";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ProductItem from "../components/ProductItem";
import { getAllProducts } from "../service/LocalStorageService";
import styles from "./scanned-items.module.scss";

const ScannedItems = () => {
  const router = useRouter();

  const products = getAllProducts();
  const productsDOM = products.map((product) => (
    <ProductItem
      name={product.name}
      quanity={product.scannedQuantity}
      onQuantityChange={() => {}}
      className={styles["product-item"]}
    />
  ));

  return (
    <Container className={styles["scanned-items"]}>
      <div className={styles.main}>
        <Row className={styles.heading}>
          <h1 className="display-1">Scanned items ✨</h1>
        </Row>
        <Row>{productsDOM}</Row>
      </div>
      <div>
        <Row>
          <Col xs={6}>
            <Button
              variant="outline-primary"
              onClick={() => {
                router.push("/scan");
              }}
            >
              Back to scanning
            </Button>
          </Col>
          <Col xs={6}>
            <Button
              onClick={() => {
                router.push("/done");
              }}
            >
              End session
            </Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default ScannedItems;
