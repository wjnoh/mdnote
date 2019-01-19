import React, { Component } from "react";
import EditorPane from "../EditorPane";
import PreviewPane from "../PreviewPane";

import "./styles.scss";

export default class Editor extends Component {
  render() {
    const { topPercentage, handleSeparatorMouseDown } = this.props;

    const topStyle = {
      flex: topPercentage
    };

    const bottomStyle = {
      flex: 1 - topPercentage
    };

    const separatorStyle = {
      top: `${topPercentage * 100}%`
    };

    return (
      <section className="editor">
        <div className="editor__top" style={topStyle}>
          <EditorPane />
        </div>
        <div
          className="editor__separator"
          style={separatorStyle}
          onMouseDown={handleSeparatorMouseDown}
        />
        <div className="editor__bottom" style={bottomStyle}>
          <PreviewPane />
        </div>
      </section>
    );
  }
}
