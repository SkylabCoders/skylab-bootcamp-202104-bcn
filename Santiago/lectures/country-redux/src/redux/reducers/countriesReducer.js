import actionTypes from '../actions/actionTypes';

function countriesReducer(initialCountries = [], action) {
  let updatedCountries = [...initialCountries];
  switch (action.type) {
    case actionTypes.LOAD_COUNTRIES:
      // el countries de [...action.countries] es el countries en loadCountries countries: COUNTRIES
      updatedCountries = [...action.countries];
      break;
    default:
      break;
  }
  return updatedCountries;
}

export default countriesReducer;
