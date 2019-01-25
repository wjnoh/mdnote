import React, { Component } from "react";
import SidebarNotes from "./presenter";

export default class Container extends Component {
  render() {
    return <SidebarNotes {...this.props} />;
  }
}
