/* eslint-disable no-console */
import React from 'react';
import { connect } from 'react-redux';

function Game(game) {
  console.log({ game });
    <h1>{game}</h1>;
}

function mapStateToProps(store) {
  return {
    game: store.gameData
  };
}
export default connect(mapStateToProps)(Game);
