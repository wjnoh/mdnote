import React, { Component } from "react";
import LogoGoogle from "react-ionicons/lib/LogoGoogle";

import "./styles.scss";

export default class LoginForm extends Component {
  render() {
    return (
      <div className="login">
        <div className="login__form">
          <h1 className="login__title">로그인</h1>
          <div className="login__google">
            <LogoGoogle />
            <span>구글 계정으로 로그인</span>
          </div>
        </div>
      </div>
    );
  }
}
