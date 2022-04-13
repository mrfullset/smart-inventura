import React from "react";
import InputWithButton from "../components/InputWithButton";

const styleguide = () => {
  return (
    <div>
      <InputWithButton
        buttonText="OK"
        placeholder="sosi pisos"
        onClick={console.log}
      />
    </div>
  );
};

export default styleguide;
