import React from "react";
import { render } from "react-dom";
import Header from './components/Header'
import Footer from './components/Footer'


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  render() {
    return (
      <div style={styles}>
        <Header />
        <Footer />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
