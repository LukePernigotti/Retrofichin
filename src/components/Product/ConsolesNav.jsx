import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

//ver de cambiar el diseño para utilizarlo como una especie de trendings

const AppWrapper = styled.div`
  display: flex;
  overflow: hidden;
`;
const Wrapper = styled.div`
  width: 100%;
`;
const Page = styled.div`
  width: 100%;
`;

class ConsolesNav extends Component {
  state = {};

  isActive(value) {
    //if (value.name !== this.props.product.name)
    return (
      <div className="nav-item" key={value.id}>
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
      </div>
    );
  }

  numOfSlidesShowing() {
    if (window.innerWidth < 576) return 2;
    else if (window.innerWidth < 768) return 3;
    else if (window.innerWidth < 992) return 4;
    else if (window.innerWidth < 1200) return 5;
    else return 6;
  }

  render() {
    const { products } = this.props;
    return (
      /*<div className="container-fluid py-5 consoles-bg">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3 className="text-uppercase">Otras consolas</h3>
              <ul
                className="nav nav nav-fill consoles-nav"
                styles="display: flex;
  overflow: hidden;"
              >
                <Slider
                  speed={500}
                  slidesToShow={2}
                  slidesToScroll={2}
                  infinite={false}
                >
                  {Object.values(products).map(value => {
                    return (
                      <React.Fragment>{this.isActive(value)}</React.Fragment>
                    );
                  })}
                </Slider>
              </ul>
            </div>
          </div>
        </div>
      </div>*/
      <div className="container-fluid py-5 consoles-bg">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3 className="text-uppercase">Otras consolas</h3>
              <div className="consoles-nav">
                <Slider
                  speed={500}
                  slidesToShow={this.numOfSlidesShowing()}
                  slidesToScroll={this.numOfSlidesShowing()}
                  centerMode={false}
                  //rows={2}
                  //slidesPerRow={2}
                  //variableWidth={true}
                  infinite={false}
                >
                  {Object.values(products).map(value => {
                    return (
                      //<React.Fragment>{this.isActive(value)}</React.Fragment>
                      <div className="nav-item" key={value.id}>
                        <a
                          className={`nav-link d-flex flex-column p-0`}
                          href={`/retrofichin/#/product/${value.id}`}
                        >
                          <img
                            src={`../${value.imgUrl}xs-${value.imgName[0]}`}
                            alt={value.name}
                          />
                          <span className="bottom-name mx-auto py-1">
                            {value.name}
                          </span>
                        </a>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
/*
  <div style={{ width: 100 }}>
                        <h3>1</h3>
                      </div>
                      <div style={{ width: 100 }}>
                        <h3>2</h3>
                      </div>
                      <div style={{ width: 50 }}>
                        <h3>3</h3>
                      </div>
                      <div style={{ width: 100 }}>
                        <h3>4</h3>
                      </div>
                      <div style={{ width: 20 }}>
                        <h3>5</h3>
                      </div>
                      <div style={{ width: 100 }}>
                        <h3>6</h3>
                      </div>*/

export default ConsolesNav;
