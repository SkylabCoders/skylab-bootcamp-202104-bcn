import axios from 'axios';
import {
  getFilms, getGenres, getCast
} from '../../../common/services/films';
import actionTypes from './actionTypes';

const URL = 'https://api.themoviedb.org/3/tv/on_the_air?api_key=676fcc92f08e6b8bd969d6b857cce0c4';

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
export function loadTvShows(url = URL) {
  return async (dispatch) => {
    const response = await axios.get(url);
    // eslint-disable-next-line no-console
    console.log(response.data);
    dispatch({
      type: actionTypes.LOAD_SHOWS,
      shows: response.data.results
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
