import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import authReducers from './authReducers';
import selectedMovieReducer from './selectedMovieReducer';
import selectedShowReducer from './selectedShowReducer';
import castReducer from './selectCastMovieReducer';
import recomendedReducer from './recomendedMovieReducer';
import showsReducer from './showsReducers';
import showsGridReducer from './moviesGridReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  auth: authReducers,
  selectedMovie: selectedMovieReducer,
  selectedShow: selectedShowReducer,
  selectedCast: castReducer,
  recomendedMovies: recomendedReducer,
  shows: showsReducer,
  moviesGrid: showsGridReducer
});

export default rootReducer;
