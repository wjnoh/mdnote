import React from "react";
import EditorPane from "../EditorPane";
import PreviewPane from "../PreviewPane";

import "./styles.scss";

const Editor = props => {
  const { topPercentage, handleSeparatorMouseDown } = props;

  const topStyle = {
    flex: topPercentage
  };

  const bottomStyle = {
    flex: 1 - topPercentage
  };

  const separatorStyle = {
    // 20% 아래로는 못줄이게 한다.
    top:
      topPercentage * 100 > 20
        ? topPercentage * 100 < 80
          ? `${topPercentage * 100}%`
          : "80%"
        : "20%"
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
};

export default Editor;
