import actionTypes from '../actions/actionTypes';

export default function countriesReducer(initialCountries = [], action) {
  let updatedCountries = [...initialCountries];
  switch (action.type) {
    case actionTypes.LOAD_COUNTRIES:
      updatedCountries = [...action.countries];

      break;

    default:
      break;
  }
  return updatedCountries;
}
