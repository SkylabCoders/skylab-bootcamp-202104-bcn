import actionTypes from '../actions/actionTypes';

const VaccinesReducers = (initialVaccinesContinentData = [], action) => {
  const chartHeader = [['Region Code', 'Continent', 'People vaccinated', 'People partially vaccinated']];
  let updatedVaccinesContinent;
  switch (action.type) {
    case actionTypes.LOAD_VACCINES_MAP:
      return [...chartHeader, ...action.data];
    default:
      updatedVaccinesContinent = initialVaccinesContinentData;
      break;
  }
  return updatedVaccinesContinent;
};

export default VaccinesReducers;
