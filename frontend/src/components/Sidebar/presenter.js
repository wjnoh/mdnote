import React from "react";
import SidebarNote from "../SidebarNote";
import { Link } from "react-router-dom";

import "./styles.scss";

const Sidebar = props => {
  const { isSidebarOn, handleSidebarOff, notes, showError, error } = props;

  return (
    <section className={isSidebarOn ? "sidebar sidebar--active" : "sidebar"}>
      <h1 className="sidebar__title">
        <Link to="/">
          {notes[0] === undefined ? (
            showError ? (
              `${error.status} ${error.statusText}`
            ) : (
              <div className="spinner" />
            )
          ) : (
            `모든 노트(${Object.keys(notes).length})`
          )}
        </Link>
      </h1>
      <div className="sidebar__menu" onClick={handleSidebarOff}>
        <Link className="sidebar__write" to="/note/write">
          노트 쓰기
        </Link>
        <Link className="sidebar__login" to="/auth">
          로그인
        </Link>
      </div>
      <ul className="sidebar__notes">
        {notes[0] === undefined ? (
          showError ? (
            ""
          ) : (
            <div className="spinner" />
          )
        ) : (
          notes
            .map(note => {
              return (
                <Link
                  to={`/note/${note.id}`}
                  key={note.id}
                  onClick={handleSidebarOff}
                >
                  <SidebarNote
                    note={{
                      title: note.title,
                      content: note.content,
                      created_at: note.created_at,
                      id: note.id
                    }}
                  />
                </Link>
              );
            })
            .reverse()
        )}
      </ul>
    </section>
  );
};

export default Sidebar;
