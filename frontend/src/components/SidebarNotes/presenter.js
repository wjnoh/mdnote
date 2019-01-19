import React, { Component } from "react";
import SidebarNote from "../SidebarNote";
import MdAdd from "react-ionicons/lib/MdAdd";

import "./styles.scss";

export default class SidebarNotes extends Component {
  render() {
    const { isSidebarOn } = this.props;

    return (
      <section className={isSidebarOn ? "sidebar sidebar--active" : "sidebar"}>
        <h1 className="sidebar__title">모든 노트(12)</h1>
        <div className="sidebar__write">
          <MdAdd />새 노트 쓰기
        </div>
        <ul className="sidebar__notes">
          <SidebarNote />
          <SidebarNote />
          <SidebarNote />
          <SidebarNote />
          <SidebarNote />
          <SidebarNote />
          <SidebarNote />
        </ul>
      </section>
    );
  }
}
