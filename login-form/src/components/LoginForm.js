import React, {useState} from 'react';
import classes from './LoginForm.module.scss'

const LoginForm = () => {

    return (
        <>

        <div className={classes.card}>
            <div className={classes.title}>로그인</div>
            <form className={classes.loginForm}>
                <div className={classes.inputContainer}>
                    <div className={classes.inputBox}>
                        <input onChange={emailChangeHandler} type="text" className={classes.input} placeholder={'이메일을 입력해주세요.'}/>
                    </div>
                    <div className={classes.inputBox}>
                        <input onChange={passwordChangeHandler} type="text" className={classes.input} placeholder={'비밀번호를 입력해주세요.'} />
                    </div>
                </div>
                <div className={classes.finder}>
                    <a href="" className={classes.finderA}>아이디 찾기</a>
                    <span className={classes.span}> </span>
                    <a href="" className={classes.finderA}>비밀번호 찾기</a>
                </div>
                <div className={classes.buttonContainer}>
                    <button className={classes.buttonLogin}>
                        <span className={classes.buttonSpan}>로그인</span>
                    </button>
                    <button className={classes.buttonRegister}>
                        <span className={classes.buttonSpan}>회원가입</span>
                    </button>
                </div>
            </form>
        </div>
        </>
    );
};

export default LoginForm;
