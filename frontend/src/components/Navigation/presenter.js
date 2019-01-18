import React, { Component } from "react";
import MdMenu from "react-ionicons/lib/MdMenu";

import "./styles.scss";

export default class Navigation extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav__container">
          <ul className="nav__items">
            <li className="nav__logo">Mdnote</li>
            <li className="nav__toggle">
              <MdMenu />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
