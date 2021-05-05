import actionTypes from '../actions/actionTypes';

function moviesReducer(movie = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_MOVIE:
      return action.movie;

    default:
      return movie;
  }
}

export default moviesReducer;
