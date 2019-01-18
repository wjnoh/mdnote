import React, { Component } from "react";
import SidebarNote from "./presenter";

export default class Container extends Component {
  render() {
    return <SidebarNote {...this.props} />;
  }
}
