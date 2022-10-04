import React from 'react';
import {useState} from "react";
import classes from './PlusButton.module.scss'

const PlusButton = () => {
    let normalValue = 0;
    const [stateValue, setValue] = useState(0);

    const normalPlus = () => {
        normalValue += 1;
        console.log(normalValue);
    }

    const buttonHandler = () => {
        setValue(prevState => prevState+1);
    }

    return (
        <div className={classes.container}>
            <div className={classes.viewer}>{normalValue}</div>
            <div className={classes.viewer}>{stateValue}</div>
            <button className={classes.button} onClick={normalPlus}>일반 변수 +1</button>
            <button className={classes.button} onClick={buttonHandler}>상태 변수 +1</button>
        </div>
    );
};

export default PlusButton;
