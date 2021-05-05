import axios from 'axios';
import actionTypes from './actionTypes';

export function loadCategoriesFromApi(url) {
  return async (dispatch) => {
    const { data } = await axios(url);
    dispatch({
      type: actionTypes.LOAD_ARTWORKS,
      artwork: data.departments,
    });
  };
}

export function loadArtworksFromApi(categoryId) {
  return async (dispatch) => {
    const { data } = await axios(`https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${categoryId}`);
    dispatch({
      type: actionTypes.LOAD_ARTWORKS,
      artwork: data.objectIDs,
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

export function loadCategory(artworkId) {
  return async (dispatch) => {
    const { data } = await axios(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artworkId}`);
    dispatch({
      type: actionTypes.LOAD_CATEGORY,
      detail: data,
    });
  };
}

export function loadDetail(detail) {
  return {
    type: actionTypes.LOAD_DETAIL,
    detail,
  };
}

export function login(user) {
  return {
    type: actionTypes.AUTH_LOGIN,
    user,
  };
}

export function logout() {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
}
