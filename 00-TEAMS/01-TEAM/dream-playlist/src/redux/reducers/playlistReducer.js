import actionTypes from '../actions/actionTypes';

function playlistReducer(playlists = [], { type, newPlaylists }) {
  // eslint-disable-next-line no-debugger
  debugger;
  switch (type) {
    case (actionTypes.LOAD_SONGS):
      return newPlaylists;
    default:
      return playlists;
  }
}

export default playlistReducer;
