import React, { Component } from "react";
import SidebarNote from "../SidebarNote";
import MdAdd from "react-ionicons/lib/MdAdd";

import "./styles.scss";

export default class SidebarNotes extends Component {
  render() {
    return (
      <section className="sidebar">
        <h1 className="sidebar__title">모든 노트(12)</h1>
        <ul className="sidebar__notes">
          <li className="sidebar__write">새 노트 쓰기</li>
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
