import React, { Component } from 'react';
import axios from 'axios';
// import {
//     Button
// } from 'reactstrap';

export default class Ticker extends Component {
  constructor(props) {
    super(props);

    this.state = { price: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(this.Price, 5000);
  }

  Price() {
    axios.get('https://api.binance.com/api/v1/ticker/allPrices').then(res => {
      const data = res.data;
      let btsBtc, btcUsd;
      for (var ndx = 0; ndx < data.length; ndx++) {
        if (data[ndx]['symbol'] === 'BTCUSDT') {
          btcUsd = data[ndx]['price'];
        }
        if (data[ndx]['symbol'] === 'BTSBTC') {
          btsBtc = data[ndx]['price'];
        }
      }

      this.setState({ price: parseFloat(btsBtc) * parseFloat(btcUsd) });
      console.log(this.state.price);
    });
  }

  render() {
    return <div />;
  }
}
