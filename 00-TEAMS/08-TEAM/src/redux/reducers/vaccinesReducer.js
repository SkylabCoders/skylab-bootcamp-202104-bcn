import actionTypes from '../actions/actionTypes';

const VaccinesReducers = (initialVaccinesContinentData = [], action) => {
  let updatedVaccinesContinent = [['Region Code', 'Continent', 'People vaccinated', 'People partially vaccinated']];
  switch (action.type) {
    case actionTypes.LOAD_VACCINES:
      updatedVaccinesContinent.push(action.data);
      break;
    default:
      updatedVaccinesContinent = initialVaccinesContinentData;
      break;
  }
  return updatedVaccinesContinent;
};

export default VaccinesReducers;
