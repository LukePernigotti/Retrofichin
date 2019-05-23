import React, { Component } from "react";

class Banner extends Component {
  render() {
    return (
      <div className="container-fluid banner">
        <div className="jumbotron mb-5">
          <h2 className="display-4 text-center text-uppercase">
            Jugá a los clásicos
          </h2>
          <p className="text-center text-uppercase lead">
            y a mucho mas con las consolas retro
          </p>
          <div className="d-flex justify-content-center">
            <a
              className="btn btn-dark btn-lg pt-3 px-5 my-5 rounded-pill text-uppercase"
              href="#consoles"
            >
              Ver consolas
            </a>
          </div>
          <picture className="d-flex justify-content-center mt-4">
            <source
              srcSet="img/games_banner_desk.png"
              media="(min-width: 992px)"
            />
            <source
              srcSet="img/games_banner_md.png"
              media="(min-width: 768px)"
            />
            <img src="img/games_banner_sm.png" alt="" />
          </picture>
        </div>
      </div>
    );
  }
}

export default Banner;
