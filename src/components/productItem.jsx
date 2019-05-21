import React, { Component } from "react";

class ProductItem extends Component {
  state = {};
  render() {
    const { name, id, imgUrl, price } = this.props.product;
    return (
      <div className="col-sm-12 col-md-6">
        <div className="card mb-4">
          <div className="card-body mx-auto">
            <h3 className="card-title text-center text-uppercase">{name}</h3>
            <div className="d-flex justify-content-center mx-auto">
              <img src={imgUrl} alt={name} />
            </div>
            <ul>
              <li>6400 juegos</li>
              <li>3 colores para elegir</li>
            </ul>
            <div className="row">
              <div className="col-6 d-flex align-items-center">
                <span className="price">${price}</span>
              </div>
              <div className="col-6 d-flex align-items-center">
                <a
                  href={`/retrofichin/#/product/${id}`}
                  className="btn btn-secondary btn-md rounded-pill button"
                >
                  + Ver Más
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
