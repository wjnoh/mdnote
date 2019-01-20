import React, { Component } from "react";
import "./styles.scss";

import CodeMirror from "codemirror";
import "codemirror/mode/markdown/markdown";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/jsx/jsx";
import "codemirror/mode/css/css";
import "codemirror/mode/shell/shell";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/monokai.css";

export default class EditorPane extends Component {
  editor = null;
  codeMirror = null;
  cursor = null;

  initilizeEditor = () => {
    this.codeMirror = CodeMirror(this.editor, {
      mode: "markdown",
      theme: "monokai",
      lineNumbers: true,
      lineWrapping: true
    });
    this.codeMirror.on("change", this.handleChangeMarkdown);
  };

  componentDidMount() {
    this.initilizeEditor();
  }

  handleChangeMarkdown = doc => {
    const { changeInput } = this.props;
    this.cursor = doc.getCursor();
    changeInput({
      name: "content",
      value: doc.getValue()
    });
  };

  // Markdown에 Value 반영, 커서 초기화 방지
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.content !== this.props.content) {
      const { codeMirror, cursor } = this;
      if (!codeMirror) return;
      codeMirror.setValue(this.props.content);
      if (!cursor) return;
      codeMirror.setCursor(cursor);
    }
  }

  render() {
    const { title, handleInputChange, handleSubmit } = this.props;

    return (
      <div className="editor-pane">
        <input
          className="editor-pane__title"
          type="text"
          name="title"
          value={title}
          placeholder="제목을 입력하세요."
          onChange={handleInputChange}
        />
        <div className="editor-pane__code" ref={ref => (this.editor = ref)} />
        <button className="editor-pane__button" onClick={handleSubmit}>
          작성하기
        </button>
      </div>
    );
  }
}
