import React, { Component } from "react";
import PreviewPane from "./presenter";

export default class Container extends Component {
  render() {
    return <PreviewPane {...this.props} />;
  }
}
