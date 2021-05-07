import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import authReducers from './authReducers';
import sliderTitleMostViewedReducer from './draw-titles/sliderTitleMostViewedReducer';
import sliderTitleLastRelasesReducer from './draw-titles/sliderTitleLastRelassesReducer';
import sliderTitleMostValuedReducer from './draw-titles/sliderTitleMostValuedReducer';
import selectedMovieReducer from './selectedMovieReducer';
import castReducer from './selectCastMovieReducer';
import recomendedReducer from './recomendedMovieReducer';
import showsReducer from './showsReducers';
import showsGridReducer from './moviesGridReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  auth: authReducers,
  titleMostViewed: sliderTitleMostViewedReducer,
  titleLastRelases: sliderTitleLastRelasesReducer,
  titleMostValued: sliderTitleMostValuedReducer,
  selectedMovie: selectedMovieReducer,
  selectedCast: castReducer,
  recomendedMovies: recomendedReducer,
  shows: showsReducer,
  moviesGrid: showsGridReducer
});

export default rootReducer;