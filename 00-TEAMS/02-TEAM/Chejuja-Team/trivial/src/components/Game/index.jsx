/* eslint-disable no-debugger */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import './game.css';

function Game({ game }) {
  function decodeHtml(html) {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }
  function validateAnswer(givenAnswer) {
    if (givenAnswer === game[0][0].correct_answer) {
      return true;
    }
    return false;
  }
  let shuffledAnswers = [];
  if (game.length) {
    const answers = [...game[0][0].incorrect_answers, game[0][0].correct_answer];
    // eslint-disable-next-line no-unused-vars
    shuffledAnswers = answers.sort((a, b) => 0.5 - Math.random());
  }
  return (
    <main className="game-window">
      <div className="game-window__question">
        {game.length ? <p>{decodeHtml(game[0][0].question)}</p> : <p>Cargando</p>}
      </div>
      <div className="answer-box">
        {
          shuffledAnswers.map((answer) => (
            <button type="button" className="answer-box__answer" onClick={() => validateAnswer(answer)}>
              {game.length ? <p>{decodeHtml(answer)}</p> : <p>Cargando</p>}
            </button>
          ))
        }

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
