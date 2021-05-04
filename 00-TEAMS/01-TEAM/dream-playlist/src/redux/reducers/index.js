import { combineReducers } from 'redux';
import playlists from './playlistReducer';
import token from './tokenReducer';
import user from './userReducer';
import auth from './authReducer';

const rootReducer = combineReducers({
  playlists,
  token,
  user,
  auth
});

export default rootReducer;
