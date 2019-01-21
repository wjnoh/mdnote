import React, { Component } from "react";
import LoginForm from "../LoginForm";
import SignupForm from "../SignupForm";

import "./styles.scss";

export default class Auth extends Component {
  render() {
    const { isLogin, handleLogin, handleSignup } = this.props;

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
              {isLogin ? "로그인" : "회원가입"}
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
  }
}
