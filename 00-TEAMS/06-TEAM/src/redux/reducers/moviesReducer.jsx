import Types from '../actions/actionTypes';

function moviesReducer(initialMovies = [], action) {
  let updatedMovies = [...initialMovies];
  switch (action.type) {
    case Types.LOAD_MOVIES:
      updatedMovies = [...action.movies];
      break;
    default:
      break;
  }
  return updatedMovies;
}

export default moviesReducer;
