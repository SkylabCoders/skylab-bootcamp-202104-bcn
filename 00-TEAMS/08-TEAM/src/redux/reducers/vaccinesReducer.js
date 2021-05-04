import actionTypes from '../actions/actionTypes';

const VaccinesReducers = (initialVaccinesContinentData = {}, action) => {
  let updatedVaccinesContinent;
  switch (action.type) {
    case actionTypes.LOAD_VACCINES:
      updatedVaccinesContinent = action.data;
      break;
    default:
      updatedVaccinesContinent = initialVaccinesContinentData;
      break;
  }
  return updatedVaccinesContinent;
};

export default VaccinesReducers;
