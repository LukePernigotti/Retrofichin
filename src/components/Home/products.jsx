import React, { Component } from "react";
import ProductItem from "./productItem";

import { ProductConsumer } from "../../context";

class Products extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid pt-5 consoles-bg consoles-px">
        <div className="container" id="consoles">
          <div className="row">
            <div className="col">
              <h2 className="mb-4 text-center text-uppercase">
                Consolas retro
              </h2>
            </div>
          </div>
          <div className="row">
            {
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return <ProductItem key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
