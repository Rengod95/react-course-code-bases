import React from "react";
import classes from "./InputContainer.module.scss";
import InputBox from "./InputBox";

const InputContainer = (props) => {
  const { inputHandlers = [] } = props;

  return (
    <div className={classes.inputContainer}>
      <InputBox
        type={"email"}
        placeHolder={"이메일을 입력해주세요."}
        onChangeHandler={inputHandlers.emailChangeHandler}
      />
      <InputBox
        type={"password"}
        placeHolder={"비밀번호를 입력해주세요."}
        onChangeHandler={inputHandlers.passwordChangeHandler}
      />
    </div>
  );
};

export default InputContainer;
