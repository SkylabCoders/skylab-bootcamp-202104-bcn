import actionTypes from '../actions/actionTypes';

const vaccinesByContinentReducer = (initialVaccineByContinentData = {}, action) => {
  let updatedVaccineByContinentData = { ...initialVaccineByContinentData };
  switch (action.type) {
    case actionTypes.LOAD_VACCINES_BY_CONTINENT:
      updatedVaccineByContinentData = { ...action.data };
      break;
    default:
      break;
  }
  return updatedVaccineByContinentData;
};

export default vaccinesByContinentReducer;
