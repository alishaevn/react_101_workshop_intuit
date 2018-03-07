import React, {Component} from "react";

import {data} from "../data";
import Price from './Price';
import ProfitLoss from './ProfitLoss';

export default class Portfolio extends Component {
  
  state = {
    numBitcoins: 4
  };

  handleChange = e => {
    this.setState({ numBitcoins: e.target.value });
  };

  render() {

    const prices = data.map((dataPoint, index) => {
      const price = dataPoint.ticker.price;
      const time = dataPoint.timestamp;
      return <Price key={`${index}-${time}`} price={price} time={time} />
    })

    return (
      <div>
        <div>
          Bitcoins owned:{" "}
          <input
            type="text"
            value={this.state.numBitcoins}
            onChange={this.handleChange}
          />
        </div>
        <ProfitLoss
          numBitcoins={this.state.numBitcoins}
          price={data[0].ticker.price}
          startingPrice={data[data.length - 1].ticker.price}
        />
        {prices}
      </div>
    );

  }
}