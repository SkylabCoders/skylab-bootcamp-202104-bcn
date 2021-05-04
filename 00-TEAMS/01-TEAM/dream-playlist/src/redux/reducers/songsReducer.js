/* eslint-disable no-debugger */
import actionTypes from '../actions/actionTypes';

function songsReducer(songs = [], { type, newSongs }) {
  debugger;
  let currentSongs = [...songs];
  switch (type) {
    case actionTypes.LOAD_SONGS:
      currentSongs = newSongs;
      break;
    default:
      break;
  }
  return currentSongs;
}

export default songsReducer;
