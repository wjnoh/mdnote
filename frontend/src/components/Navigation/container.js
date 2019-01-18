import React, { Component } from "react";
import Navigation from "./presenter";

export default class Container extends Component {
  render() {
    return <Navigation {...this.props} />;
  }
}
