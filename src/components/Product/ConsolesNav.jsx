import React, { Component } from "react";

class ConsolesNav extends Component {
  state = {};

  isActive(item) {
    if (item === this.props.product.name) return "active";
  }

  render() {
    const { products } = this.props;
    return (
      <ul className="nav nav nav-pills nav-fill consoles-nav">
        {Object.values(products).map(value => {
          return (
            <li className="nav-item" key={value.id}>
              <a
                className={`nav-link ${this.isActive(value.name)}`}
                href={`/retrofichin/#/product/${value.id}`}
              >
                {value.name}
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ConsolesNav;
