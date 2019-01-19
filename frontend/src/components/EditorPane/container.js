import React, { Component } from "react";
import EditorPane from "./presenter";

export default class Container extends Component {
  handleInputChange = e => {
    this.props.changeInput({ name: e.target.name, value: e.target.value });
  };

  render() {
    return (
      <EditorPane {...this.props} handleInputChange={this.handleInputChange} />
    );
  }
}
