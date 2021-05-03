import { combineReducers } from 'redux';
import songs from './playlistReducer';
import token from './tokenReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  songs,
  token,
  user
});

export default rootReducer;
