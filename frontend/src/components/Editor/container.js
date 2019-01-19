import React, { Component } from "react";
import Editor from "./presenter";

export default class Container extends Component {
  state = {
    topPercentage: 0.5
  };

  handleMouseMove = e => {
    this.setState({
      topPercentage: (e.clientY - 50) / (window.innerHeight - 50)
    });
    console.log(e.clientY, window.innerHeight);
  };

  handleMouseUp = e => {
    document.body.removeEventListener("mousemove", this.handleMouseMove);
    window.removeEventListener("mouseup", this.handleMouseUp);
  };

  handleSeparatorMouseDown = e => {
    document.body.addEventListener("mousemove", this.handleMouseMove);
    window.addEventListener("mouseup", this.handleMouseUp);
  };

  render() {
    return (
      <Editor
        {...this.state}
        {...this.props}
        handleSeparatorMouseDown={this.handleSeparatorMouseDown}
      />
    );
  }
}
