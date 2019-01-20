import React, { Component } from "react";

import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-bash.min.js";
import "prismjs/components/prism-javascript.min.js";
import "prismjs/components/prism-jsx.min.js";
import "prismjs/components/prism-css.min.js";

import "./styles.scss";

export default class MarkdownRender extends Component {
  componentDidMount() {
    this.props.renderMarkdown();
    Prism.highlightAll();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.content !== this.props.content) {
      this.props.renderMarkdown();
    }
    if (prevProps.html !== this.props.html) {
      Prism.highlightAll();
    }
  }

  render() {
    const { title, html } = this.props;
    const markup = {
      __html: html
    };

    return (
      <>
        {title !== "" ? <div className="markdown-title">{title}</div> : ""}
        <div className="markdown-body" dangerouslySetInnerHTML={markup} />
      </>
    );
  }
}
