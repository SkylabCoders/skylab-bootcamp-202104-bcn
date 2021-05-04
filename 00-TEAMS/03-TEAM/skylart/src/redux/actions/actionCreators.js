import axios from 'axios';
import actionTypes from './actionTypes';

export function loadArtworksFromApi(url) {
  return async (dispatch) => {
    const { data } = await axios(url);
    dispatch({
      type: actionTypes.LOAD_ARTWORKS,
      artwork: data.departments,
    });
  };
}

export function loadFavorites() {
  return {
    type: actionTypes.LOAD_FAVORITES,
  };
}

export function deleteArtwork() {
  return {
    type: actionTypes.DELETE_FAVORITE,
  };
}

export function addArtwork() {
  return {
    type: actionTypes.ADD_FAVORITE,
  };
}

export function loadDetail(artId) {
  return {
    type: actionTypes.LOAD_DETAIL,
    artId,
  };
}

export function login() {
  return {
    type: actionTypes.AUTH_LOGIN,
  };
}

export function logout() {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
}
