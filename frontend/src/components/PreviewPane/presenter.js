import React, { Component } from "react";
import MarkdownRender from "../MarkdownRender";

import "./styles.scss";

export default class PreviewPane extends Component {
  render() {
    const { title, content } = this.props;

    return (
      <div className="preview-pane">
        <div className="preview-pane__content">
          <MarkdownRender title={title} content={content} />
        </div>
      </div>
    );
  }
}
