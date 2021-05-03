/* eslint-disable no-debugger */
/* eslint-disable no-console */
import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

function Game({ game }) {
  console.log(game);
  return (
    <main className="mode-game">
      {
        game.length ? <p>{game[0][0].question}</p> : <p>Cargando</p>
      }
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
