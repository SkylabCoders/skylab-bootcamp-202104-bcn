import actionTypes from '../actions/actionTypes';

function favoritesReducer(favorites = [], action) {
  switch (action.type) {
    case actionTypes.ADD_FAVORITE:
      return [
        ...favorites, action.selectedArtwork,
      ];
    case actionTypes.DELETE_FAVORITE:
      return favorites.filter((favorite) => favorite.id !== action.selectedArtwork.objectID);
    default:
      return favorites;
  }
}

export default favoritesReducer;
