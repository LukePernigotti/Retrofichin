import React, { Component } from "react";

class Games extends Component {
  state = {
    games: {
      "adventure-island": false,
      battletoads: false,
      "clu-clu-land": false,
      contra: false,
      "dig-dug": false,
      "elevator-action": false,
      excitebike: false,
      "ice-climber": false,
      "kirby-adventure": false,
      "kung-fu-master": false,
      "mega-man": false,
      "pac-man": false,
      sonic: false,
      "urban-champion": false
    },
    hovering: false
  };

  handleFlip(game) {
    console.log(this.state.games[game]);
    this.setState(gam => ({
      games: { ...gam.games, [game]: !gam.games[game] }
    }));
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col d-flex flex-wrap justify-content-center">
            {Object.keys(this.state.games).map(game => {
              //console.log(this.state.games[game]);
              const flipBoxClassName = this.state.games[game]
                ? "flip-box flipped"
                : "flip-box";
              return (
                <div
                  className={flipBoxClassName}
                  key={game}
                  onMouseEnter={() => this.handleFlip(game)}
                >
                  <div className="flip-box-inner">
                    <div className="flip-box-front">
                      <img src={`img/juegos/${game}-1.jpg`} alt="" />
                    </div>
                    <div className="flip-box-back">
                      <img src={`img/juegos/${game}-2.jpg`} alt="" />
                    </div>
                  </div>
                </div>
                // <div className="card-wrapper">
                //   <div id={`card-1-${game}`} className="card card-rotating">
                //     <div className="face front">
                //       <div className="card-up">
                //         <img
                //           src={`img/juegos/${game}-1.jpg`}
                //           alt=""
                //           className="card-img-top"
                //         />
                //         <div className="card-body">
                //           <a
                //             className="rotate-btn"
                //             data-card={`card-1-${game}`}
                //           >
                //             <i className="fas fa-redo-alt" /> Click here to
                //             rotate
                //           </a>
                //         </div>
                //       </div>
                //     </div>
                //     <div className="face back">
                //       <div className="card-up">
                //         <img
                //           src={`img/juegos/${game}-2.jpg`}
                //           alt=""
                //           className="card-img-top"
                //         />
                //       </div>
                //       <div className="card-body">
                //         <a className="rotate-btn" data-card={`card-1-${game}`}>
                //           <i className="fas fa-undo" /> Click here to rotate
                //           back
                //         </a>
                //       </div>
                //     </div>
                //   </div>
                // </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Games;
