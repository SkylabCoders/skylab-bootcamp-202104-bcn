import actionTypes from '../actions/actionTypes';

function countriesReducer(countries = [], action) {
  let updateCountries = [...countries];

  switch (action.type) {
    case actionTypes.LOAD_COUNTRIES:
      updateCountries = [...action.countries];
      break;

    default:

      break;
  }
  return updateCountries;
}

export default countriesReducer;
