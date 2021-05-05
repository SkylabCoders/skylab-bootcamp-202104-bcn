import { getFilms } from '../../../common/services/films';
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
