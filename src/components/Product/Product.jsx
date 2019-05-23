import React, { Component } from "react";
import axios from "axios";
import ProductInside from "./ProductInside";

import PropTypes from "prop-types";

import { withRouter } from "react-router";

import { ProductConsumer } from "../../context";

class Product extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: 0,
      imgUrl: ""
    };
  }

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
  /*async componentDidMount() {
    try {
      const res = await axios.get(`/product/${this.props.match.params.id}`);
      const uniqueProduct = res.data;
      this.setState({
        name: uniqueProduct.name,
        price: uniqueProduct.price,
        imgUrl: uniqueProduct.imgUrl
      });
    } catch (err) {
      console.log(err);
      console.log(this.props.match.params.id);
    }
  }*/

  render() {
    return (
      <ProductConsumer>
        {value => {
          const product = value.getItem(Number(this.props.match.params.id));
          return (
            <ProductInside
              key={product.id}
              product={product}
              products={value.products}
            />
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Product;

// Create a new component that is "connected" (to borrow redux
// terminology) to the router.
const ShowTheLocationWithRouter = withRouter(Product);
