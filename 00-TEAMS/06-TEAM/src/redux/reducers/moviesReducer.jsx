import actionTypes from '../actions/actionTypes';

function moviesReducer(initialMovies = [], action) {
  let updatedMovies = [...initialMovies];
  switch (action.type) {
    case actionTypes.LOAD_MOVIES:
      // el countries de [...action.countries] es el countries en loadCountries countries: COUNTRIES
      updatedMovies = [...action.movies];
      break;
    default:
      break;
  }
  return updatedMovies;
}

export default moviesReducer;
