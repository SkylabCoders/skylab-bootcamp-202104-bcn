import actionTypes from '../actions/actionTypes';

function playlistReducer(playlists = [], { type, newPlaylists }) {
  switch (type) {
    case (actionTypes.LOAD_PLAYLISTS):
      return newPlaylists;
    default:
      return playlists;
  }
}

export default playlistReducer;
