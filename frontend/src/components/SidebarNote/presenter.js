import React, { Component } from "react";
import Moment from "moment";
import { withRouter } from "react-router-dom";

import "./styles.scss";

class SidebarNote extends Component {
  render() {
    const { note, location } = this.props;

    return (
      <li
        className={
          location.pathname.split("/")[2].toString() === note.id.toString()
            ? "sidebar__note sidebar__note--active"
            : "sidebar__note"
        }
      >
        <span className="sidebar-note__title">{note.title}</span>
        <span className="sidebar-note__content">{note.content}</span>
        <span className="sidebar-note__date">
          {Moment(note.created_at)
            .format("YYYY년 MM월 DD일")
            .toString()}
        </span>
      </li>
    );
  }
}

export default withRouter(SidebarNote);
