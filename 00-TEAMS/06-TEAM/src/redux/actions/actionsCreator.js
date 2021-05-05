import axios from 'axios';
import actionTypes from './actionTypes';
import { API_KEY, BASE_URL } from '../../application/services/services';

export default function loadMovies(searchParam) {
  const newUrl = `${BASE_URL}${searchParam}?api_key=${API_KEY}&language=en-US&page=1`;
  return async (dispatch) => {
    const response = await axios.get(newUrl);
    dispatch({
      type: actionTypes.LOAD_MOVIES,
      movies: response.data.results
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
