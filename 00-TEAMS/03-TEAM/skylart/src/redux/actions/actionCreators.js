import actionTypes from './actionTypes';

export function loadArtworks() {
  return {
    type: actionTypes.LOAD_ARTWORKS,
  };
}

export function deleteArtwork() {
  return {
    type: actionTypes.DELETE_ARTWORK,
  };
}

export function addArtwork() {
  return {
    type: actionTypes.ADD_ARTWORK,
  };
}

export function loadDetail(artId) {
  return {
    type: actionTypes.LOAD_DETAIL,
    artId,
  };
}
