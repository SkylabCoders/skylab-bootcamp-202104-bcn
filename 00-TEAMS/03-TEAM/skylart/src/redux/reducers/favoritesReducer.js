import actionTypes from '../actions/actionTypes';

function favoritesReducer(favorites = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_FAVORITES:
      return favorites;
    case actionTypes.ADD_FAVORITE:
      return [...favorites, action.favorite];
    case actionTypes.DELETE_FAVORITE:
      return favorites.filter((favorite) => favorite.id !== action.artworkId);
    default:
      return favorites;
  }
}

export default favoritesReducer;
