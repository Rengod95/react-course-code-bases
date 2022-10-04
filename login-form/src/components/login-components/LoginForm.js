import React from "react";
import classes from "./LoginForm.module.scss";

const LoginForm = (props) => {
  return <form className={classes.loginForm}>{props.children}</form>;
};

export default LoginForm;
