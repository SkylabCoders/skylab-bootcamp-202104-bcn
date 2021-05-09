import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import authReducers from './authReducers';
import selectedMovieReducer from './selectedMovieReducer';
import selectedShowReducer from './selectedShowReducer';
import castReducer from './selectCastMovieReducer';
import recomendedReducer from './recomendedMovieReducer';
import showsReducer from './showsReducers';
import showsGridReducer from './moviesGridReducer';
import recommendedShowReducer from './recommendedShowReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  auth: authReducers,
  selectedMovie: selectedMovieReducer,
  selectedShow: selectedShowReducer,
  selectedCast: castReducer,
  recomendedMovies: recomendedReducer,
  shows: showsReducer,
  moviesGrid: showsGridReducer,
  recommendedShows: recommendedShowReducer
});

export default rootReducer;
