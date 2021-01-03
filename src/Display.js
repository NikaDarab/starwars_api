import React, { Component } from "react";

class Display extends Component {
  render() {
    return (
      <div>
        This is the results of the search!
        <p> {this.props.name}</p>
      </div>
    );
  }
}

export default Display;
