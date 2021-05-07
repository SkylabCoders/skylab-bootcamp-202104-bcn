import {
  getFilms, getGenres, getCast, getRecomended
} from '../../../common/services/films';
import actionTypes from './actionTypes';

export function loadMovies(searchParam) {
  return async (dispatch) => {
    const response = await getFilms(searchParam);
    dispatch({
      type: actionTypes.LOAD_MOVIES,
      moviesType: searchParam,
      movies: response.data.results
    });
  };
}

export function loadGenres(genreId) {
  return async (dispatch) => {
    const response = await getGenres(genreId);
    dispatch({
      type: actionTypes.LOAD_GENRE_MOVIE,
      movieType: genreId,
      genres: response.data.results
    });
  };
}

export function getMovieById(movieId) {
  return async (dispatch) => {
    const response = await getFilms(movieId);
    dispatch({
      type: actionTypes.LOAD_MOVIE,
      movie: response.data
    });
  };
}

export function getCastMovie(movieId) {
  return async (dispatch) => {
    const response = await getCast(movieId);
    dispatch({
      type: actionTypes.LOAD_CAST,
      cast: response.data
    });
  };
}

export function loadRecomended(movieId) {
  return async (dispatch) => {
    const response = await getRecomended(movieId);
    dispatch({
      type: actionTypes.LOAD_RECOMENDED,
      recomended: response.data.results
    });
  };
}

export function login(user) {
  return {
    type: actionTypes.AUTH_LOGIN,
    user
  };
}

export function logout() {
  return {
    type: actionTypes.AUTH_LOGOUT
  };
}
