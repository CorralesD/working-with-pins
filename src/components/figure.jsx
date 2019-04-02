import React, { Component } from "react";

class Figure extends Component {
  state = {};
  render() {
    return (
      <figure className="figure">
        <img
          src="https://picsum.photos/200/300
"
          className="figure-img img-fluid rounded"
          alt="..."
        />
        <figcaption className="figure-caption">
          A caption for the above image.
        </figcaption>
      </figure>
    );
  }
}

export default Figure;
