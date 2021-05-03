import actionTypes from '../actions/actionTypes';

function artworksReducer(artworks = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_ARTWORKS:
      return artworks;
    default:
      return artworks;
  }
}

export default artworksReducer;
