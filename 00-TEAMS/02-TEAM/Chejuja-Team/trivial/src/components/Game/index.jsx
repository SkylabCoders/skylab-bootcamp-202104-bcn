/* eslint-disable no-debugger */
/* eslint-disable no-console */
import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

function Game({ game }) {
  console.log(game);
  return (<h1>Haaa</h1>);
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
