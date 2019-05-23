import React, { Component } from "react";
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import Contact from "./components/Contact/Contact";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

class Routes extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "Mini Fichín",
        price: 6500,
        imgUrl: "img/consolas/mini_fichin_md.jpg"
      },
      {
        id: 2,
        name: "Doble Palanca",
        price: 7000,
        imgUrl: "img/consolas/doble_palanca_md.jpg"
      },
      {
        id: 3,
        name: "Bartop",
        price: 10000,
        imgUrl: "img/consolas/bartop_md.png"
      },
      {
        id: 4,
        name: "Arcade",
        price: 11500,
        imgUrl: "img/consolas/arcade_md.jpg"
      }
    ]
  };
  render() {
    return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/product/:id" component={Product} />
        <Route path="/contact" exact component={Contact} />
      </Router>
    );
  }
}

export default Routes;
