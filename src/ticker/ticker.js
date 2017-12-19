import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/fontawesome-free-solid';

export default class Ticker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      price: 0,
      numBts: 3808.188,
      isLoading: true,
      isRefreshing: false
    };
  }

  componentDidMount() {
    this.Price();
    this.interval = setInterval(this.Price, 5000);
  }

  Price = () => {
    if (!this.state.isLoading) {
      this.setState({
        isRefreshing: true
      });
    }
    fetch('https://muqd7picdk.execute-api.us-west-2.amazonaws.com/v1/ticker')
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          price: res.btsPrice.toFixed(5),
          isLoading: false,
          isRefreshing: false
        });
      });
  };

  handleChange = event => {
    this.setState({
      numBts: event.target.value === '' ? 0 : parseFloat(event.target.value)
    });
  };

  render() {
    let ticker = null;
    let refresh = null;

    if (this.state.isLoading) {
      ticker = (
        <div>
          <h3>
            Loading <FontAwesomeIcon icon={faSpinner} pulse size="lg" />
          </h3>
        </div>
      );
    } else {
      ticker = (
        <div>
          <h4>BTS is currently worth ${this.state.price}</h4>
          <br />
          <h4>
            You have ${(this.state.numBts * this.state.price).toFixed(2)} worth
            of BTS
          </h4>
        </div>
      );
    }
    if (this.state.isRefreshing) {
      console.log('refreshing');
      refresh = (
        <div>
          <h3>
            Refreshing <FontAwesomeIcon icon={faSpinner} pulse size="lg" />
          </h3>
        </div>
      );
    }
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
        {ticker}
        <br />
        {refresh}
      </div>
    );
  }
}
