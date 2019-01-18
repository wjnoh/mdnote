import React, { Component } from "react";
import "./styles.scss";

export default class SidebarNote extends Component {
  render() {
    return (
      <li className="sidebar__note">
        <span className="sidebar-note__title">제목은 제목</span>
        <span className="sidebar-note__content">
          내용은 내용입니다 그러므로 내용입니다 그래서 내용은 내용내용 그래서
          내용은 내용내용
        </span>
        <span className="sidebar-note__date">2018년 1월 18일</span>
      </li>
    );
  }
}
