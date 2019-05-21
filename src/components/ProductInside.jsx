import React, { Component } from "react";
import Carousel from "./Product/Carousel";
import Details from "./Product/Details";

class ProductInside extends Component {
  state = {};
  hasProductType() {
    if (this.props.product.type)
      return <p className="text-center mb-0">{this.props.product.type}</p>;
  }
  render() {
    const { product } = this.props;
    return (
      <div className="container mb-4">
        <div className="row mb-4">
          <div className="col">
            <h2 className="text-center text-uppercase mt-5 title">
              {product.name}
            </h2>
            {this.hasProductType()}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-12">
            <Carousel key={product.id} product={product} />
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="row">
              <div className="col">
                <span className="price-label">Precio: </span>
                <span className="price">${product.price}</span>
              </div>
            </div>
            <Details key={product.id} product={product} />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductInside;
