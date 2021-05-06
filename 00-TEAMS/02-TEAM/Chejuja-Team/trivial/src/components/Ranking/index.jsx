import React from 'react';
import { Link } from 'react-router-dom';
import './ranking.css';
import Confeti from './confeti';

function Ranking() {
  return (
    <main className="ranking-game">
      <Confeti />
      <div className="ranking-game__avatar">
        <img src="https://img.icons8.com/emoji/96/000000/man-superhero.png" alt="avatar" />
        <p className="ranking-game__text">Has quedado en X posicion!</p>
      </div>
      <div className="ranking-game__container-gif">
        <Link to="/"><img src="https://i.pinimg.com/originals/15/32/04/1532041b7388db634ff593b7d6d7e8bc.gif" alt="brujaGif" /></Link>
        <p>BACK</p>
      </div>
      <div className="ranking-game__podium">
        <div className="ranking-game__podium--second">
          <img src="https://img.icons8.com/doodle/48/000000/second-place-ribbon.png" alt="second" />
          <p>Juanda</p>
        </div>
        <div className="ranking-game__podium--first">
          <img src="https://img.icons8.com/doodle/48/000000/first-place-ribbon--v1.png" alt="first" />
          <p>Chejuja</p>
        </div>
        <div className="ranking-game__podium--third">
          <img src="https://img.icons8.com/doodle/48/000000/third-place-ribbon.png" alt="third" />
          <p>Chema</p>
        </div>

      </div>

    </main>
  );
}
export default Ranking;
