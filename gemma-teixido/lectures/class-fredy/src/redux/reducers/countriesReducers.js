/* eslint-disable no-debugger */
import actionTypes from '../actions/actionTypes';

function countriesReducers(initialCountries = [], action) {
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

export default countriesReducers;
