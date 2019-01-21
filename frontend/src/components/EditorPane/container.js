import React, { Component } from "react";
import EditorPane from "./presenter";

export default class Container extends Component {
  handleInputChange = e => {
    this.props.changeInput({ name: e.target.name, value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.props.title === "" || this.props.content === "") {
      alert("제목과 본문을 모두 작성해주세요.");
    } else {
      this.props.addNote({
        title: this.props.title,
        content: this.props.content
      });
      this.props.initialize();
    }
  };

  componentWillUnmount() {
    this.props.initialize();
  }

  render() {
    return (
      <EditorPane
        {...this.props}
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
