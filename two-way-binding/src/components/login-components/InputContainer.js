import React, { useState } from "react";
import classes from "./InputContainer.module.scss";
import InputBox from "./InputBox";

const InputContainer = (props) => {
  const [emailValidation, setEmailValidation] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(false);

  const emailValidator = (email) => {
    if (String(email).trim().includes("@")) setEmailValidation(true);
    console.log(emailValidation);
  };

  const passwordValidator = (pw) => {
    if (pw.trim().length >= 6) setPasswordValidation(true);
  };

  return (
    <div className={classes.inputContainer}>
      <InputBox
        type={"email"}
        placeHolder={"이메일을 입력해주세요."}
        inputValidator={emailValidator}
      />
      {emailValidation === true && <span>이메일 양식에 유효합니다.</span>}
      <InputBox
        type={"password"}
        inputType={"password"}
        placeHolder={"비밀번호를 입력해주세요."}
        inputValidator={passwordValidator}
      />
      {passwordValidation && <span>6자 이상의 비밀번호에 부합합니다.</span>}
    </div>
  );
};

export default InputContainer;
