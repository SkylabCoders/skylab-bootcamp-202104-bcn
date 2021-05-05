import axios from 'axios';
import actionTypes from './actionTypes';

const URL = 'https://api.themoviedb.org/3/movie/popular?api_key=676fcc92f08e6b8bd969d6b857cce0c4&language=en-US&page=1';

export function loadMovies(url = URL) {
  return async (dispatch) => {
    const response = await axios.get(url);
    dispatch({
      type: actionTypes.LOAD_MOVIES,
      movies: response.data.results
    });
  };
}

export function loadTitleMostVewed() {
  return {
    type: actionTypes.LOAD_TITLE_MOST_VIEWED,
    title: 'Las más vistas'
  };
}

export function loadTitleLastRelase() {
  return {
    type: actionTypes.LOAD_TITLE_LAST_RELEASES,
    title: 'Últimos estrenos'
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
