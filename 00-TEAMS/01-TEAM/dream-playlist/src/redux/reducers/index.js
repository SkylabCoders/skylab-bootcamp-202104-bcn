import { combineReducers } from 'redux';
import playlists from './playlistReducer';
import token from './tokenReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  playlists,
  token,
  user
});

export default rootReducer;
