import React from "react";
import MdMenu from "react-ionicons/lib/MdMenu";
import { Link } from "react-router-dom";

import "./styles.scss";

const Navigation = props => {
  const { isSidebarOn, handleSidebarOn, handleSidebarOff } = props;

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
};

export default Navigation;
