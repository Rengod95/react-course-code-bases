import React from "react";
import classes from "./Card.module.scss";

const Card = (props) => {
  return (
    <div className={classes.Card}>
      <div className={classes.title}>{props.title}</div>
      {props.children}
    </div>
  );
};

export default Card;
