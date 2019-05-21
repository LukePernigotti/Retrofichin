import React, { Component } from "react";
import Home from "./components/Home";
import Product from "./components/Product";
import Contact from "./components/Contact";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
      <Router basename={process.env.PUBLIC_URL}>
        <Route path={process.env.PUBLIC_URL + "/"} exact component={Home} />
        <Route
          path={process.env.PUBLIC_URL + "/product/:id"}
          component={Product}
        />
        <Route
          path={process.env.PUBLIC_URL + "/contact"}
          exact
          component={Contact}
        />
      </Router>
    );
  }
}

export default Routes;
