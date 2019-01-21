import React, { Component } from "react";
import MarkdownRender from "../MarkdownRender";
import Moment from "moment";

import "./styles.scss";

export default class NoteView extends Component {
  render() {
    const { match, notes, loaded, isMain } = this.props;

    return (
      <section className="note">
        {isMain ? (
          // 메인페이지("/")일 경우 소개글 표시
          <div>
            <span className="note__date">2019년 2월 20일</span>
            <MarkdownRender
              title="Mdnote"
              content={
                "## 새로운 마크다운 노트 \n > 반갑습니다! \n\n ```javascript\n console.log('Hello Mdnote!') \n```"
              }
            />
          </div>
        ) : loaded ? (
          notes
            .filter(note => {
              return note.id.toString() === match.params.noteId.toString();
            })
            .map(note => {
              return (
                <div key={note.id}>
                  <span className="note__date">
                    {Moment(note.created_at)
                      .format("YYYY년 MM월 DD일")
                      .toString()}
                  </span>
                  <MarkdownRender title={note.title} content={note.content} />
                </div>
              );
            })
        ) : (
          <div className="spinner" />
        )}
      </section>
    );
  }
}
