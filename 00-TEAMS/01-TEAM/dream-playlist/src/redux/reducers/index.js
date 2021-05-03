import { combineReducers } from 'redux';
import playlistReducer from './playlistReducer';

const rootReducer = combineReducers({
  songs: playlistReducer
});

export default rootReducer;
