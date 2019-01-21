import React, { Component } from "react";
import Auth from "./presenter";

export default class Container extends Component {
  state = {
    isLogin: true
  };

  handleLogin = () => {
    this.setState({
      isLogin: true
    });
  };

  handleSignup = () => {
    this.setState({
      isLogin: false
    });
  };

  render() {
    return (
      <Auth
        {...this.state}
        {...this.props}
        handleLogin={this.handleLogin}
        handleSignup={this.handleSignup}
      />
    );
  }
}
