import React from "react";
import MarkdownRender from "../MarkdownRender";
import Moment from "moment";

import "./styles.scss";

const NoteView = props => {
  const { match, notes, isMain, showError } = props;

  return (
    <section className="note">
      {isMain ? (
        // 메인페이지("/")일 경우 소개글 표시
        <div>
          <span className="note__date">2019년 5월 12일</span>
          <MarkdownRender
            title="Mdnote"
            content={
              "## 새로운 마크다운 노트 \n > 반갑습니다! \n\n ```javascript\n console.log('Hello Mdnote!') \n```"
            }
          />
        </div>
      ) : notes[0] === undefined ? (
        showError ? (
          ""
        ) : (
          <div className="spinner" />
        )
      ) : (
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
      )}
    </section>
  );
};

export default NoteView;
