import actionTypes from '../actions/actionTypes';

function searchMovieReducer(movies = {}, action) {
  switch (action.type) {
    case actionTypes.SEARCH_MOVIES:
      return action.movies;
    default:
      return movies;
  }
}

export default searchMovieReducer;
