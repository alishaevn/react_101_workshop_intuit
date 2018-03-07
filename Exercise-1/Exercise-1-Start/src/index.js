import React from "react";
import { render } from "react-dom";
import Header from './components/Header'

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  render() {
    return (
      <Header />
    );
  }
}

render(<App />, document.getElementById("root"));
