import React from "react";
import classes from "./InputBox.module.scss";

const InputBox = (props) => {
  const { placeHolder, type, onChangeHandler } = props;

  return (
    <div className={classes.inputBox}>
      <input
        onChange={onChangeHandler}
        type={type}
        className={classes.input}
        placeholder={placeHolder}
      />
    </div>
  );
};

export default InputBox;
