import { combineReducers } from 'redux';
import playlistReducer from './playlistReducer';
import tokenReducer from './tokenReducer';

const rootReducer = combineReducers({
  songs: playlistReducer,
  token: tokenReducer
});

export default rootReducer;
