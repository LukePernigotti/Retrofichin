import React, { Component } from "react";

class Details extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <ul className="nav" id="tab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="info-tab"
                data-toggle="tab"
                role="tab"
                aria-controls="home"
                aria-selected="true"
                href="#info"
              >
                Info
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="plataformas-tab"
                data-toggle="tab"
                role="tab"
                aria-controls="plataformas"
                aria-selected="false"
                href="#plataformas"
              >
                Plataformas
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="detalles-tab"
                data-toggle="tab"
                role="tab"
                aria-controls="detalles"
                aria-selected="false"
                href="#detalles"
              >
                Detalles
              </a>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="tab-content col" id="tabContent">
            <div
              className="tab-pane fade show active"
              id="info"
              role="tabpanel"
              aria-labelledby="info-tab"
            >
              <p
                dangerouslySetInnerHTML={{
                  __html: `${this.props.product.info}`
                }}
              />
            </div>
            <div
              className="tab-pane fade"
              id="plataformas"
              role="tabpanel"
              aria-labelledby="plataformas-tab"
            >
              <ul>
                <li>Atari (261 juegos)</li>
                <li>Atari 7800 (64 juegos)</li>
                <li>Game & Watch (56 juegos)</li>
                <li>Gameboy (560 juegos)</li>
                <li>Gameboy Advance (211 juegos)</li>
                <li>Gameboy Color (952 juegos)</li>
                <li>GameGear (246 juegos)</li>
                <li>N64 (277 juegos)</li>
                <li>NES (1657 juegos)</li>
                <li>PSX (19 juegos)</li>
                <li>Sega 32x (34 juegos)</li>
                <li>Sega Master System (271 juegos)</li>
                <li>Sega Mega Drive (815 juegos)</li>
                <li>SG1000 (73 juegos)</li>
                <li>SNES (818 juegos)</li>
                <li>Virtual boy (27 juegos)</li>
                <li>WonderSwan (59 juegos)</li>
              </ul>
            </div>
            <div
              className="tab-pane fade"
              id="detalles"
              role="tabpanel"
              aria-labelledby="detalles-tab"
            >
              <ul>
                <li>Más de 6400 juegos con la posibilidad de agregar más.</li>
                <li>Memoria de 3gb de ram.</li>
                <li>Hasta 6 jugadores.</li>
                <li>Compatible con teclado y mouse.</li>
                <li>3 variantes para elegir: clásica, negra, y blanca.</li>
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Details;
