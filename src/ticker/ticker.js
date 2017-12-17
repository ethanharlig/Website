import React, { Component } from 'react';
import axios from 'axios';

export default class Ticker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      price: 0,
      numBts: 3808.188
    };
  }

  componentDidMount() {
    this.Price();
    this.interval = setInterval(this.Price, 1000);
  }

  Price = () => {
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

      this.setState({
        price: (parseFloat(btsBtc) * parseFloat(btcUsd)).toFixed(7)
      });
    });
  };

  handleChange = event => {
    this.setState({
      numBts: event.target.value === '' ? 0 : parseFloat(event.target.value)
    });
  };

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>BTS Ticker</h1>
        <hr />
        <form>
          <label>
            How much BTS do you have
            <br />
            <input
              type="number"
              value={this.state.numBts}
              onChange={this.handleChange}
            />
          </label>
        </form>
        <hr />
        <h4>BTS is currently worth ${this.state.price}</h4>
        <br />
        <h4>
          You have ${(this.state.numBts * this.state.price).toFixed(2)} worth of
          BTS
        </h4>
      </div>
    );
  }
}
