import React from "react";
import LoginForm from "../LoginForm";
import SignupForm from "../SignupForm";

import "./styles.scss";

const Auth = props => {
  const { isLogin, handleLogin, handleSignup } = props;

  return (
    <div className="auth">
      <div className="auth__container">
        <div
          className={
            isLogin ? "auth__login auth__login--active" : "auth__login"
          }
        >
          <LoginForm />
          <div
            className={isLogin ? "auth__toggle" : "auth__toggle"}
            onClick={isLogin ? handleSignup : handleLogin}
          >
            {isLogin ? "회원가입" : "로그인"}
          </div>
        </div>
        <div
          className={
            isLogin ? "auth__signup" : "auth__signup auth__signup--active"
          }
        >
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default Auth;
