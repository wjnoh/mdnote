import React, { Component } from "react";
import MarkdownRender from "../MarkdownRender";

import "./styles.scss";

export default class NoteView extends Component {
  render() {
    const { note } = this.props;

    return (
      <section className="note">
        <span className="note__date">{note.created_at}</span>
        <MarkdownRender title={note.title} content={note.content} />
      </section>
    );
  }
}
