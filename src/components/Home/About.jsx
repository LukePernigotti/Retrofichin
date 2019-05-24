import React, { Component } from "react";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="text-center text-uppercase mb-4">
              ¿Qué es Retrofichin?
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>
              Somos personas como vos que amamos y disfrutamos los juegos retro,
              por eso creamos Retrofichin. Construimos una consola
              multiplataforma de videojuegos retro con los mejores clásicos de
              más de 35 consolas. Sí, el Pacman, Contra, Dig Dug, Super Mario,
              Kung Fu Master, Excitebike, Ice Climber, Urban Champion, Clu Clu
              Land, Adventure Island, Punch Out!!, Bubble Bobble, Mega Man,
              Battletoads, Kirby's Adventure.
            </p>

            <p>
              No, no son los únicos, ¡son más de 16.000 juegos! Leiste bien, y
              todos en una misma consola. Hacé click en una de las plataformas
              de acá abajo para ver la lista completa de juegos de cada consola.
            </p>

            <p>Poner consolas acá!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
