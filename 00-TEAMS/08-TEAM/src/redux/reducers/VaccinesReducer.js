import actionTypes from '../actions/actionTypes';

const VaccinesReducers = (initialGlobalData = {}, action) => {
  let updatedVaccines = { ...initialGlobalData };
  switch (action.type) {
    case actionTypes.LOAD_VACCINES:
      updatedVaccines = { ...action.data };
      break;
    default:
      break;
  }
  return updatedVaccines;
};

export default VaccinesReducers;
