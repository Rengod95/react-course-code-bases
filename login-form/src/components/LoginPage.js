import React, { useState } from "react";

import Card from "./UI/Card";
import AuthFinder from "./login-components/AuthFinder";
import LoginForm from "./login-components/LoginForm";
import ButtonContainer from "./login-components/ButtonContainer";
import InputContainer from "./login-components/InputContainer";

const LoginPage = () => {
  const [emailInput, setEmailInput] = useState(undefined);
  const [passwordInput, setPasswordInput] = useState(undefined);

  const emailChangeHandler = (event) => {
    setEmailInput(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPasswordInput(event.target.value);
  };

  console.log(emailInput, passwordInput);

  return (
    <Card title={"로그인"}>
      <LoginForm>
        <InputContainer
          inputHandlers={{ emailChangeHandler, passwordChangeHandler }}
        />
        <AuthFinder />
        <ButtonContainer />
      </LoginForm>
    </Card>
  );
};

export default LoginPage;
