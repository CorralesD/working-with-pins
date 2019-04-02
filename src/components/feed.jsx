import React, { Component } from "react";
import Figure from "./figure";

class Feed extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <h1>This is the FEED</h1>
        <div
          className="feed"
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <Figure />
          <Figure />
          <Figure />
        </div>
      </div>
    );
  }
}

export default Feed;
