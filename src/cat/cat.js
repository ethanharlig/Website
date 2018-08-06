import React, { Component } from "react";
import cat from "../img/cat.jpg";

import {
  CardImg
} from "reactstrap";

export default class Cat extends Component {
  constructor(props) {
    super(props);

    this.state = {
        when: "until",
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    };
  }

  componentDidMount() {
    this.TimeUntilCat();
    this.interval = setInterval(this.TimeUntilCat, 10);
  }

  TimeUntilCat = () => {
      let cat = new Date(1535068800000);
    //   let cat = new Date(1533567078000);
      let now = new Date();
      let timeDiff = Math.abs(cat.getTime() - now.getTime());

      let diffDays = Math.floor(timeDiff / (1000 * 3600 * 24));

      timeDiff -= diffDays * (1000 * 3600 * 24);

      let diffHours = Math.floor(timeDiff / (1000 * 3600));
      timeDiff -= diffHours * (1000 * 3600);

      let diffMins = Math.floor(timeDiff / (1000 * 60));
      timeDiff -= diffMins * (1000 * 60);

      let diffSeconds = Math.floor(timeDiff / (1000));
      timeDiff -= diffSeconds * 1000;

      let when = now < cat ? "until" : "since";

    this.setState({
        when: when,
        days: diffDays,
        hours: diffHours,
        minutes: diffMins,
        seconds: diffSeconds
    });
  };

  handleChange = event => {
    this.setState({
      numBts: event.target.value === "" ? 0 : parseFloat(event.target.value)
    });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Time {this.state.when} cat:</h1>
        <h3>{this.state.days} days, {this.state.hours} hours, {this.state.minutes} minutes, {this.state.seconds} seconds</h3>
        <CardImg src={cat} />
      </div>
    );
  }
}

