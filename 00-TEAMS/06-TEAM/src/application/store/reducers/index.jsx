import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import authReducers from './authReducers';
import sliderTitleReducer from './sliderTitleReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  auth: authReducers,
  title: sliderTitleReducer
});

export default rootReducer;
