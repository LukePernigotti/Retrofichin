import React, { Component } from "react";
import { ProductConsumer } from "../context";

class Header extends Component {
  //para que el dropdown aparezca desplegado según el vw
  isShowing() {
    if (window.innerWidth < 992) return "show";
  }
  isTrue() {
    if (window.innerWidth < 992) return "true";
    else return "false";
  }
  render() {
    return (
      <header className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <h1>
            <a className="navbar-brand text-uppercase" href="/">
              Retrofichin
            </a>
          </h1>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <nav className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/retrofichin/#/">
                  <span className="font-icon home mr-2" />
                  Inicio
                </a>
              </li>
              <li className={`nav-item dropdown ${this.isShowing()}`}>
                <a
                  className="nav-link dropdown-toggle"
                  href="javascritp: void(0);"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded={this.isTrue()}
                >
                  <span className="font-icon consolas mr-2" />
                  Consolas
                </a>
                <div
                  className={`dropdown-menu ${this.isShowing()}`}
                  aria-labelledby="navbarDropdown"
                >
                  <ul>
                    <ProductConsumer>
                      {value => {
                        return value.products.map(product => {
                          return (
                            <React.Fragment
                              key={
                                product.id /*ver si este key está bien usado*/
                              }
                            >
                              <li>
                                <a
                                  className="dropdown-item"
                                  href={`/retrofichin/#/product/${product.id}`}
                                >
                                  <span
                                    className={`font-icon ${product.icon} mr-2`}
                                  />
                                  {product.name}
                                </a>
                              </li>
                            </React.Fragment>
                          );
                        });
                      }}
                    </ProductConsumer>
                  </ul>
                </div>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/retrofichin/#/contact">
                  <span className="font-icon contact mr-2" />
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </nav>
      </header>
    );
  }
}

export default Header;
