import React, { Component } from "react";
import MdMenu from "react-ionicons/lib/MdMenu";
import { Link } from "react-router-dom";

import "./styles.scss";

export default class Navigation extends Component {
  render() {
    const { isSidebarOn, handleSidebarOn, handleSidebarOff } = this.props;

    return (
      <nav className="nav">
        <div className="nav__container">
          <ul className="nav__items">
            <li className="nav__logo">
              <Link to="/">Mdnote</Link>
            </li>
            <li className="nav__toggle">
              <MdMenu
                onClick={() => {
                  isSidebarOn ? handleSidebarOff() : handleSidebarOn();
                }}
              />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
