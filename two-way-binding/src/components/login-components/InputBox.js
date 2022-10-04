import React, { useState } from "react";
import classes from "./InputBox.module.scss";

const InputBox = (props) => {
  const { placeHolder, type, inputValidator } = props;

  const [inputValue, setInputValue] = useState(undefined);

  const inputChangeHandler = (event) => {
    setInputValue((prev) => event.target.value);
    console.log(inputValue);
    inputValidator(event.target.value);
  };

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
