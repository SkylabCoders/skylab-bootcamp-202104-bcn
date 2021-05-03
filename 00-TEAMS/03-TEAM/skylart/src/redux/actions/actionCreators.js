import actionTypes from './actionTypes';

export function loadArtworks() {
  return {
    type: actionTypes.LOAD_ARTWORKS,
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
