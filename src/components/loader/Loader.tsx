import React, { Component } from "react";
import BaseIcon from "../icon/BaseIcon";

export default class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <BaseIcon name="Spinner" />
      </div>
    );
  }
}
