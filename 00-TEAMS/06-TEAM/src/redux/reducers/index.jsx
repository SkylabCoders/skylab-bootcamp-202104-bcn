import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import authReducers from './authReducers';
import sliderTitleReducer from './sliderTitleReducer';
import selectedMovieReducer from './selectedMovieReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  auth: authReducers,
  title: sliderTitleReducer,
  selectedMovie: selectedMovieReducer
});

export default rootReducer;
