import actionTypes from '../actions/actionTypes';

const countryReducer = (initialCountryData = {}, action) => {
  let updatedCountryData = { ...initialCountryData };
  switch (action.type) {
    case actionTypes.LOAD_COUNTRY:
      updatedCountryData = { ...action.data };
      break;
    default:
      break;
  }
  return updatedCountryData;
};

export default countryReducer;
