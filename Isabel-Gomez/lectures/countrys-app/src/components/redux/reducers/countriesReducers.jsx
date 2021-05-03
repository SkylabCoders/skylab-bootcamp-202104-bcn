import actionTypes from '../actions/actionTypes';

const countriesReducers = (initialCountries = [], action) => {
  let updatedCountries = [...initialCountries];
  switch (action.type) {
    case actionTypes.LOAD_COUNTRIES:
      updatedCountries = [...action.countries];
      break;
    default:
      break;
  }
  return updatedCountries;
};

export default countriesReducers;
