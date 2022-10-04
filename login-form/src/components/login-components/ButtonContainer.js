import React from "react";
import classes from "./ButtonContainer.module.scss";
import Button from "../UI/Button";

const ButtonContainer = (props) => {
  return (
    <div className={classes.buttonContainer}>
      <Button styles={"login"} spanText={"로그인"} />
      <Button styles={"register"} spanText={"회원가입"} />
    </div>
  );
};

export default ButtonContainer;
