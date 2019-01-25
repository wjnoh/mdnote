import React from "react";
import Moment from "moment";

import "./styles.scss";

const SidebarNote = props => {
  const { note } = props;

  return (
    <li
      className={
        window.location.pathname === `/note/${note.id}`
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
};

export default SidebarNote;
