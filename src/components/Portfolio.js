import React, {Component} from "react";
import LineChart from "react-linechart";

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

    const priceLine = {
      color: "red",
      points: []
    };

    const priceData = [];

    const prices = data.map(dataPoint => {
      const price = dataPoint.ticker.price;
      const time = dataPoint.timestamp;
      priceLine.points.push({
        x: time,
        y: price
      });
      return <Price price={price} time={time} />;
    });
    priceData.push(priceLine);

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
        <LineChart width={700} height={400} data={priceData} />
      </div>
    );

  }
}