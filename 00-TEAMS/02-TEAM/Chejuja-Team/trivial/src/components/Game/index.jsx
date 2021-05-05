/* eslint-disable no-debugger */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import {
  Link,
  useParams // Route
} from 'react-router-dom';
import { connect } from 'react-redux';
import './game.css';

function Game({ game }) {
  const [isCorrect, setIsCorrect] = useState(false);

  const onClickAnswer = () => {
    setIsCorrect(!isCorrect);
  };
  let { currentQuestion } = (useParams());
  // eslint-disable-next-line radix
  currentQuestion = parseInt(currentQuestion) + 1;
  function decodeHtml(html) {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }
  // function isCorrectAnswer(givenAnswer) {
  //   return (givenAnswer === game[0][currentQuestion].correct_answer);
  // }
  let shuffledAnswers = [];
  if (game.length) {
    // eslint-disable-next-line max-len
    const answers = [...game[0][currentQuestion].incorrect_answers, game[0][currentQuestion].correct_answer];
    // eslint-disable-next-line no-unused-vars
    shuffledAnswers = answers.sort((a, b) => 0.5 - Math.random());
  }
  return (
    <main className="game-window">
      <div className="game-window__question">
        {game.length ? <p>{decodeHtml(game[0][currentQuestion].question)}</p> : <p>Cargando</p>}
      </div>
      <div className="answer-box">
        {
          shuffledAnswers.map((answer) => (
            <button type="button" className={`answer-box__answer ${isCorrect ? 'correct' : ''}`} onClick={onClickAnswer}>
              {game.length ? <p>{decodeHtml(answer)}</p> : <p>Cargando</p>}
            </button>
          ))
        }
      </div>
      <div className="game-window__question-menu">
        <Link to={`${currentQuestion}`}>
          <button type="button">Next</button>
        </Link>
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
