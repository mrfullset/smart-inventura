import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import styles from "./InputWithButton.module.scss";

const InputWithButton = ({
  buttonText,
  placeholder,
  onClick = () => {},
}: InputWithButtonProps) => {
  const [value, setValue] = useState("");

  return (
    <div className={styles["input-with-button"]}>
      <Form.Control
        type="text"
        placeholder={placeholder}
        className={styles.input}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <Button className={styles.button} onClick={() => onClick(value)}>
        {buttonText}
      </Button>
    </div>
  );
};

export default InputWithButton;

type InputWithButtonProps = {
  buttonText: string;
  placeholder: string;

  onClick?: (value: string) => void;
};
