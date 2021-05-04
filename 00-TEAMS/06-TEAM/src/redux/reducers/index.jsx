import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import authReducers from './authReducers';

const rootReducer = combineReducers({
  movies: moviesReducer,
  auth: authReducers
});

export default rootReducer;
