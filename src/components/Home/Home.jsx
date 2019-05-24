import React, { Component } from "react";
import Banner from "./banner";
import About from "./About";
import Products from "./products";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Banner />
        <About />
        <Products />
      </React.Fragment>
    );
  }
}

export default Home;
