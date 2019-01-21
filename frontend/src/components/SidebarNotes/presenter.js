import React, { Component } from "react";
import SidebarNote from "../SidebarNote";
import MdAdd from "react-ionicons/lib/MdAdd";
import { Link } from "react-router-dom";

import "./styles.scss";

export default class SidebarNotes extends Component {
  render() {
    const { isSidebarOn, handleSidebarOff, notes, loaded } = this.props;

    return (
      <section className={isSidebarOn ? "sidebar sidebar--active" : "sidebar"}>
        <h1 className="sidebar__title">
          <Link to="/">모든 노트({Object.keys(notes).length})</Link>
        </h1>
        <div className="sidebar__write" onClick={handleSidebarOff}>
          <Link to="/note/write">
            <MdAdd />새 노트 쓰기
          </Link>
        </div>
        <ul className="sidebar__notes">
          {loaded ? (
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
          ) : (
            <div className="spinner" />
          )}
        </ul>
      </section>
    );
  }
}
