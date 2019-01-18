import React, { Component } from "react";
import NoteView from "./presenter";

export default class Container extends Component {
  render() {
    return <NoteView {...this.props} />;
  }
}
