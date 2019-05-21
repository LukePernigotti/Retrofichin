import React, { Component } from "react";

class Carousel extends Component {
  state = {};
  render() {
    return (
      <div
        id="carouselControls"
        className="carousel slide mb-3"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselControls"
            data-slide-to="0"
            className="active"
          />
          <li data-target="#carouselControls" data-slide-to="1" />
          <li data-target="#carouselControls" data-slide-to="2" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={`${this.props.product.imgUrl}`}
              className="d-block w-100"
              alt="Consola mini fichin"
            />
          </div>
          <div className="carousel-item">
            <img
              src={`${this.props.product.imgUrl}`}
              className="d-block w-100"
              alt="Consola mini fichin"
            />
          </div>
          <div className="carousel-item">
            <img
              src={`${this.props.product.imgUrl}`}
              className="d-block w-100"
              alt="Consola mini fichin"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselControls"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Anterior</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselControls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Siguiente</span>
        </a>
      </div>
    );
  }
}

export default Carousel;
