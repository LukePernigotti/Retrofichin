import React, { Component } from "react";
import ReactDOM from "react-dom";
//import "./css/styles.css";
//import App from "./App";
//import * as serviceWorker from "./serviceWorker";
import Header from "./components/header";
import Footer from "./components/footer";
import Routes from "./Routes";

import { ProductProvider } from "./context";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Document extends Component {
  render() {
    return (
      <React.Fragment>
        <ProductProvider>
          <Header />
          <Routes />
        </ProductProvider>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Document;

ReactDOM.render(<Document />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
