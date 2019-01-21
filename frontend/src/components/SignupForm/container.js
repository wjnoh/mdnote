import React, { Component } from "react";
import LoginForm from "./presenter";

export default class Container extends Component {
  render() {
    return <LoginForm {...this.props} />;
  }
}
