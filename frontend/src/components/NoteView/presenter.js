import React, { Component } from "react";
import MarkdownRender from "../MarkdownRender";
import Moment from "moment";

import "./styles.scss";

export default class NoteView extends Component {
  render() {
    const { note } = this.props;

    return (
      <section className="note">
        <span className="note__date">
          {Moment(note.created_at)
            .format("YYYY년 MM월 DD일")
            .toString()}
        </span>
        <MarkdownRender title={note.title} content={note.content} />
      </section>
    );
  }
}
