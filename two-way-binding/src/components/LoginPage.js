import React, { useState } from "react";

import Card from "./UI/Card";
import AuthFinder from "./login-components/AuthFinder";
import LoginForm from "./login-components/LoginForm";
import ButtonContainer from "./login-components/ButtonContainer";
import InputContainer from "./login-components/InputContainer";

const LoginPage = () => {
  return (
    <Card title={"로그인"}>
      <LoginForm>
        <InputContainer />
        <AuthFinder />
        <ButtonContainer />
      </LoginForm>
    </Card>
  );
};

export default LoginPage;
