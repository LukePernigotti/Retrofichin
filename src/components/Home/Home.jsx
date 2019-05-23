import React, { Component } from "react";
import Banner from "./banner";
import Products from "./products";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Banner />
        <Products />
      </React.Fragment>
    );
  }
}

export default Home;
