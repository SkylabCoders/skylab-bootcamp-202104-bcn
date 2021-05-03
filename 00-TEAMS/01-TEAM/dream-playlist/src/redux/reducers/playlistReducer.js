import actionTypes from '../actions/actionTypes';

function playlistReducer(songs = {}, { type, newSongs }) {
  // eslint-disable-next-line no-debugger
  debugger;
  switch (type) {
    case (actionTypes.LOAD_SONGS):
      return newSongs;
    default:
      return songs;
  }
}

export default playlistReducer;
