import React, { Component } from "react";

export default class Cat extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
      <h1>
        Please download the following links:
      </h1>
      <br/>
        <h2>
          <a href="https://s3-us-west-2.amazonaws.com/ethanharlig-random/scuba_pics.zip">Download link #1</a>
        </h2>
        <h2>
          <a href="https://s3-us-west-2.amazonaws.com/ethanharlig-random/scuba_vids1.zip">Download link #2</a>
        </h2>
        <h2>
          <a href="https://s3-us-west-2.amazonaws.com/ethanharlig-random/scuba_vids2.zip">Download link #3</a>
        </h2>
        <h2>
          <a href="https://s3-us-west-2.amazonaws.com/ethanharlig-random/scuba_vids3.zip">Download link #3</a>
        </h2>
      </div>
    );
  }
}

