import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ProductItem from "../components/ProductItem";
import {
  addOrUpdateProduct,
  getAllProducts,
  getProduct,
} from "../service/LocalStorageService";
import styles from "./scanned-items.module.scss";

const ScannedItems = () => {
  const router = useRouter();
  const [r, sr] = useState({});

  const onQuantityChange = (code: string, q: number) => {
    const p = getProduct(code)!;
    p.scannedQuantity = q;
    addOrUpdateProduct(p);
    sr({});
  };

  if (typeof window === "undefined") {
    return <></>;
  }
  const products = getAllProducts();
  const productsDOM = products.map((product) => (
    <ProductItem
      key={product.code}
      name={product.name}
      quanity={product.scannedQuantity}
      onQuantityChange={(e) => {
        onQuantityChange(product.code, e);
      }}
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
