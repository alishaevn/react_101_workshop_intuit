import React from "react";
import { render } from "react-dom";

// if the component isn't defined as a default, you must wrap the Component name in {}
import Header from './components/Header'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  render() {
    return (
      <div style={styles}>
        <Header />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
