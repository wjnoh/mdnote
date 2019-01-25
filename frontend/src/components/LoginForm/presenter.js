import React from "react";
import "./styles.scss";

const SignupForm = () => {
  return (
    <form className="login">
      <h1 className="login__title">로그인</h1>
      <input
        className="input"
        type="text"
        name="username"
        placeholder="아이디"
        required
      />
      <input
        className="input"
        type="password"
        name="password"
        placeholder="패스워드"
        required
      />
      <button className="button">로그인</button>
    </form>
  );
};

export default SignupForm;
