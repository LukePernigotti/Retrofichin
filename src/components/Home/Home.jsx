import React, { Component } from "react";
import Banner from "./banner";
import About from "./About";
import Products from "./products";
import Games from "./Games";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Banner />
        <About />
        <Games />
        <Products />
      </React.Fragment>
    );
  }
}

export default Home;
