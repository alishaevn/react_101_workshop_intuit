import React, {Component} from "react";
import {data} from "../data";
import Price from './Price';

export default class Portfolio extends Component {
  render() {

    const prices = data.map((dataPoint, index) => {
      const price = dataPoint.ticker.price;
      const time = dataPoint.timestamp;
      return <Price key={`${index}-${time}`} price={price} time={time} />
    })

    return (
      <div>
        {prices}
      </div>
    );

  }
}