import React, { Component } from "react";
import App from "./presenter";

export default class Container extends Component {
  state = {
    isSidebarOn: false
  };

  handleSidebarOn = () => {
    this.setState({
      isSidebarOn: true
    });
  };

  handleSidebarOff = () => {
    this.setState({
      isSidebarOn: false
    });
  };

  componentDidMount() {
    const { getNotes } = this.props;
    getNotes();
  }

  render() {
    return (
      <App
        {...this.state}
        {...this.props}
        handleSidebarOn={this.handleSidebarOn}
        handleSidebarOff={this.handleSidebarOff}
      />
    );
  }
}
