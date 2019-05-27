import React, { Component } from "react";

class Carousel extends Component {
  state = {};
  isActive(e) {
    if (e === this.props.product.imgUrl[0] || e == 0) return "active";
  }

  render() {
    const { imgUrl } = this.props.product;
    return (
      <div
        id="carouselControls"
        className="carousel slide mb-3"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          {Object.keys(imgUrl).map(imgNum => {
            return (
              <li
                data-target="#carouselControls"
                data-slide-to={imgNum}
                className={this.isActive(imgNum)}
                key={imgNum}
              />
            );
          })}
        </ol>
        <div className="carousel-inner">
          {Object.values(imgUrl).map(img => {
            console.log(img);
            return (
              <div className={`carousel-item ${this.isActive(img)}`} key={img}>
                <img
                  src={`${img}`}
                  className="d-block w-100"
                  alt="Consola mini fichin"
                />
              </div>
            );
          })}
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
