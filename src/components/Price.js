import React, { Component } from "react";

export default class Price extends Component {
  render() {
    return (
      <div>
        ${this.props.price} USD @ {this.props.time} ms
      </div>
    );
  }
}