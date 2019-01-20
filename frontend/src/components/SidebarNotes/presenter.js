import React, { Component } from "react";
import SidebarNote from "../SidebarNote";
import MdAdd from "react-ionicons/lib/MdAdd";
import { Link } from "react-router-dom";

import "./styles.scss";

export default class SidebarNotes extends Component {
  render() {
    const { isSidebarOn, handleSidebarOff } = this.props;

    return (
      <section className={isSidebarOn ? "sidebar sidebar--active" : "sidebar"}>
        <h1 className="sidebar__title">
          <Link to="/">모든 노트(12)</Link>
        </h1>
        <div className="sidebar__write" onClick={handleSidebarOff}>
          <Link to="/note/write">
            <MdAdd />새 노트 쓰기
          </Link>
        </div>
        <ul className="sidebar__notes">
          <Link to="/note/1" key={1}>
            <SidebarNote
              note={{
                title: "제목",
                content: "내용",
                created_at: "2019년 01월 20일"
              }}
            />
          </Link>
        </ul>
      </section>
    );
  }
}
