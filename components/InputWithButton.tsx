import React, { forwardRef, Ref, useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import styles from "./InputWithButton.module.scss";

const InputWithButton = (
  {
    buttonText,
    placeholder,
    onClick = () => {},
    value,
    onValueChange,
  }: InputWithButtonProps,
  ref?: Ref<HTMLInputElement>
) => {
  // const [value, setValue] = useState("");

  return (
    <div className={styles["input-with-button"]}>
      <Form.Control
        type="text"
        placeholder={placeholder}
        className={styles.input}
        value={value}
        onChange={(e) => {
          onValueChange(e.target.value);
        }}
        ref={ref}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onClick(value);
          }
        }}
      />
      <Button className={styles.button} onClick={() => onClick(value)}>
        {buttonText}
      </Button>
    </div>
  );
};

export default forwardRef(InputWithButton);

type InputWithButtonProps = {
  buttonText: string;
  placeholder: string;
  value: string;
  onValueChange: (e: string) => void;

  onClick?: (value: string) => void;
};
