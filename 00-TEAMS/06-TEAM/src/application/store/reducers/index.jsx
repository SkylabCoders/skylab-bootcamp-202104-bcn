import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import authReducers from './authReducers';
import sliderTitleMostViewedReducer from './draw-titles/sliderTitleMostViewedReducer';
import sliderTitleLastRelasesReducer from './draw-titles/sliderTitleLastRelassesReducer';
import sliderTitleMostValuedReducer from './draw-titles/sliderTitleMostValuedReducer';
import selectedMovieReducer from './selectedMovieReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  auth: authReducers,
  titleMostViewed: sliderTitleMostViewedReducer,
  titleLastRelases: sliderTitleLastRelasesReducer,
  titleMostValued: sliderTitleMostValuedReducer,
  selectedMovie: selectedMovieReducer
});

export default rootReducer;
