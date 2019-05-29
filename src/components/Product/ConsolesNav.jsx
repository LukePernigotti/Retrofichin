import React, { Component } from "react";

//ver de cambiar el diseño para utilizarlo como una especie de trendings

class ConsolesNav extends Component {
  state = {};

  isActive(value) {
    if (value.name !== this.props.product.name)
      return (
        <li className="nav-item" key={value.id}>
          <a
            className={`nav-link d-flex flex-column p-0`}
            href={`/retrofichin/#/product/${value.id}`}
          >
            <img
              src={`../${value.imgUrl}xs-${value.imgName[0]}`}
              alt={value.name}
            />
            <span className="bottom-name mx-auto py-1">{value.name}</span>
          </a>
        </li>
      );
  }

  render() {
    const { products } = this.props;
    return (
      <div className="container-fluid py-5 consoles-bg">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3 className="text-uppercase">Otras consolas</h3>
              <ul className="nav nav nav-fill consoles-nav">
                {Object.values(products).map(value => {
                  return (
                    <React.Fragment>{this.isActive(value)}</React.Fragment>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ConsolesNav;
