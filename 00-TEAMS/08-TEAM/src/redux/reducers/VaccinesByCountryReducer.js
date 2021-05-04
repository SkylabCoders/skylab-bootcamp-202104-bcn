import actionTypes from '../actions/actionTypes';

const vaccineByCountryReducer = (initialVaccineByCountryData = {}, action) => {
  let updatedVaccineByCountryData = { ...initialVaccineByCountryData };
  switch (action.type) {
    case actionTypes.LOAD_VACCINES_BY_COUNTRY:
      updatedVaccineByCountryData = { ...action.data };
      break;
    default:
      break;
  }
  return updatedVaccineByCountryData;
};

export default vaccineByCountryReducer;
