import React, { Component } from "react";
import "./styles.scss";

export default class SignupForm extends Component {
  render() {
    return (
      <form className="signup">
        <h1 className="signup__title">회원가입</h1>
        <input
          className="input"
          type="text"
          name="username"
          placeholder="* 아이디"
          required
        />
        <input
          className="input"
          type="text"
          name="email"
          placeholder="* 이메일"
          required
        />
        <input
          className="input"
          type="password"
          name="password"
          placeholder="* 패스워드"
          required
        />
        <button className="button">회원가입</button>
      </form>
    );
  }
}
