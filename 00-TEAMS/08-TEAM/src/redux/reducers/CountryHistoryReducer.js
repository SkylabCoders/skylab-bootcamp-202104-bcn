/* eslint-disable no-console */
import actionTypes from '../actions/actionTypes';

const countryHistoryReducer = (initialCountryData = {}, action) => {
  let updatedCountryData = { ...initialCountryData };
  switch (action.type) {
    case actionTypes.LOAD_COUNTRY_HISTORY:
      updatedCountryData = { ...action.data };
      break;
    default:
      break;
  }
  return updatedCountryData;
};

export default countryHistoryReducer;
