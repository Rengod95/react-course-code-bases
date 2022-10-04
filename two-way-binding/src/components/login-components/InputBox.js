import React, { useState } from "react";
import classes from "./InputBox.module.scss";

const InputBox = (props) => {
  const { placeHolder, type, inputValidator } = props;

  const [inputValue, setInputValue] = useState("");

  const inputChangeHandler = (event) => {
    setInputValue((prev) => event.target.value);
    inputValidator(event.target.value);
  };

  console.log(`${type}: `, inputValue);

  return (
    <div className={classes.inputBox}>
      <input
        onChange={inputChangeHandler}
        type={type}
        className={classes.input}
        placeholder={placeHolder}
      />
    </div>
  );
};

export default InputBox;
