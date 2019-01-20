import React, { Component } from "react";
import "./styles.scss";

export default class SidebarNote extends Component {
  render() {
    const { note } = this.props;
    return (
      <li className="sidebar__note">
        <span className="sidebar-note__title">{note.title}</span>
        <span className="sidebar-note__content">{note.content}</span>
        <span className="sidebar-note__date">{note.created_at}</span>
      </li>
    );
  }
}
