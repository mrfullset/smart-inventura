import React from "react";
import NumberSelector from "./NumberSelector";
import styles from "./ProductItem.module.scss";

const ProductItem = ({
  name,
  quanity,
  onQuantityChange,
  className = "",
}: ProductItemProps) => {
  return (
    <div className={styles["product-item"] + " " + className}>
      <p className={styles.name}>{name}</p>
      <NumberSelector
        value={quanity}
        onChange={onQuantityChange}
        className={styles.selector}
      />
    </div>
  );
};

export default ProductItem;

type ProductItemProps = {
  name: string;
  quanity: number;
  onQuantityChange: (quantity: number) => void;
  className?: string;
};
