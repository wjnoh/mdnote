import React, { Component } from "react";
import SignupForm from "./presenter";

export default class Container extends Component {
  render() {
    return <SignupForm {...this.props} />;
  }
}
