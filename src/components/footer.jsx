import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="container-fluid">
        <div className="row">
          <div className="col">
            <p className="media-title text-uppercase">Seguinos en las redes</p>
            <p>Y mantenete al tanto de todas las novedades.</p>

            <ul className="social-media d-flex">
              <li className="rounded-pill mr-5">
                <a
                  className="d-flex align-items-center justify-content-center fb"
                  href="#"
                >
                  <span className="font-icon Facebook" />
                  <span>Facebook</span>
                </a>
              </li>
              <li className="rounded-pill mr-5">
                <a
                  className="d-flex align-items-center justify-content-center tw"
                  href="#"
                >
                  <span className="font-icon Twitter" />
                  <span>Twitter</span>
                </a>
              </li>
              <li className="rounded-pill">
                <a
                  className="d-flex align-items-center justify-content-center ins"
                  href="#"
                >
                  <span className="font-icon Instagram" />
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
