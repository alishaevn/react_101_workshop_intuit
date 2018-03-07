import React, {Component} from "react";
import LineChart from "react-linechart";

import {data} from "../data";
import Price from './Price';
import ProfitLoss from './ProfitLoss';

export default class Portfolio extends Component {
  
  state = {
    numBitcoins: 4,
    data:[],
    startingPrice: 0
  };

  componentDidMount() {
    fetch("https://api.cryptonator.com/api/ticker/btc-usd")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          data: this.state.data.concat([data]),
          startingPrice: data.ticker.price
        });
      });
    setInterval(() => {
      fetch("https://api.cryptonator.com/api/ticker/btc-usd")
        .then(res => {
          return res.json();
        })
        .then(data => {
          this.setState({
            data: this.state.data.concat([data])
          });
        });
    }, 60000);
  }

  componentDidUpdate() {
    console.log("Portofolio component updated");
  }

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