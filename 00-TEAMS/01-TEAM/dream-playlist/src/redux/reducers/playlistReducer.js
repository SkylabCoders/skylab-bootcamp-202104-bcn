import SONGS from '../../assets/musicList.mock';
import actionTypes from '../actions/actionTypes';

function playlistReducer(songs = [], action) {
  switch (action.type) {
    case (actionTypes.LOAD_SONGS):
      return SONGS;
    default:
      return songs;
  }
}

export default playlistReducer;
