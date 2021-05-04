/* eslint-disable no-debugger */
/* eslint-disable no-console */
import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import './game.css';

function Game({ game }) {
  console.log(game);
  function decodeHtml(html) {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }
  return (
    <main className="game-window">
      <div className="game-window__question">
        {game.length ? <p>{decodeHtml(game[0][0].question)}</p> : <p>Cargando</p>}
      </div>
      <div className="answer-box">
        <div className="answer-box__answer">
          {game.length ? <p>{decodeHtml(game[0][0].incorrect_answers[0])}</p> : <p>Cargando</p>}
        </div>
        <div className="answer-box__answer">
          {game.length ? <p>{decodeHtml(game[0][0].incorrect_answers[1])}</p> : <p>Cargando</p>}
        </div>
        <div className="answer-box__answer">
          {game.length ? <p>{decodeHtml(game[0][0].incorrect_answers[2])}</p> : <p>Cargando</p>}
        </div>
        <div className="answer-box__answer">
          {game.length ? <p>{decodeHtml(game[0][0].correct_answer)}</p> : <p>Cargando</p>}
        </div>
      </div>
    </main>
  );
}
Game.propTypes = {
  game: PropTypes.shape([]).isRequired
};

function mapStateToProps(store) {
  return {
    game: store.gameData
  };
}
export default connect(mapStateToProps)(Game);
