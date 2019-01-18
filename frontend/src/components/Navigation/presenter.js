import React, { Component } from "react";
import MdMenu from "react-ionicons/lib/MdMenu";

import "./styles.scss";

export default class Navigation extends Component {
  render() {
    const { isSidebarOn, handleSidebarOn, handleSidebarOff } = this.props;

    return (
      <nav className="nav">
        <div className="nav__container">
          <ul className="nav__items">
            <li className="nav__logo">Mdnote</li>
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
