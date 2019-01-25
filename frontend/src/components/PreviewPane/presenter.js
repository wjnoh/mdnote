import React from "react";
import MarkdownRender from "../MarkdownRender";

import "./styles.scss";

const PreviewPane = props => {
  const { title, content } = props;

  return (
    <div className="preview-pane">
      <div className="preview-pane__content">
        <MarkdownRender title={title} content={content} />
      </div>
    </div>
  );
};

export default PreviewPane;
