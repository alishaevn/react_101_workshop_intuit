import React, { Component } from "react";

class Title extends React.Component {
  render() {
    return <h1>Bitfolio</h1>;
  }
}

class SubTitle extends React.Component {
  render() {
    return <div>Track your bitcoin net worth</div>;
  }
}



export class Header extends Component {
  render() {
    return (
      <div>
        <Title />
        <SubTitle />
      </div>
    );
  }
}
