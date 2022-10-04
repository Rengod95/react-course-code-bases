import React from 'react';
import classes from "./AuthFinder.module.scss";

const AuthFinder = () => {

    return (
            <div className={classes.finder}>
                <a href="" className={classes.finderA}>아이디 찾기</a>
                <span className={classes.span}> </span>
                <a href="" className={classes.finderA}>비밀번호 찾기</a>
            </div>
    );
};

export default AuthFinder;
