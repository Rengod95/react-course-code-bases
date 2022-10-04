import React from "react";
import classes from "./Button.module.scss";

const Button = (props) => {
  const { styles, spanText } = props;

  return (
    <button
      className={`${
        styles === "login" ? classes.buttonLogin : classes.buttonRegister
      }`}
    >
      <span className={classes.buttonSpan}>{spanText}</span>
    </button>
  );
};

export default Button;
