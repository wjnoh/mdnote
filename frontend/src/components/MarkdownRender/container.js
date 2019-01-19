import React, { Component } from "react";
import MarkdownRender from "./presenter";
import marked from "marked";

export default class Container extends Component {
  state = {
    html: ""
  };

  renderMarkdown = () => {
    const { content } = this.props;
    if (!content) {
      this.setState({
        html: ""
      });
      return;
    }
    this.setState({
      html: marked(content, {
        breaks: true,
        sanitize: true
      })
    });
  };

  render() {
    return (
      <MarkdownRender
        {...this.state}
        {...this.props}
        renderMarkdown={this.renderMarkdown}
      />
    );
  }
}
