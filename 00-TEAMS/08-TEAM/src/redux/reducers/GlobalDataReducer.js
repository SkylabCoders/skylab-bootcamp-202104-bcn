import actionTypes from '../actions/actionTypes';

const globalDataReducers = (initialGlobalData = {}, action) => {
  let updatedGlobalData = { ...initialGlobalData };
  switch (action.type) {
    case actionTypes.LOAD_GLOBAL:
      updatedGlobalData = { ...action.data };
      break;
    default:
      break;
  }
  return updatedGlobalData;
};

export default globalDataReducers;
