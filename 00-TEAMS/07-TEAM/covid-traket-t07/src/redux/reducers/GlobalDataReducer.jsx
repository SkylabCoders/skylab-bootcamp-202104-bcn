import actionTypes from '../actions/actionTypes';

const globalDataReducers = (initialGlobalData = [], action) => {
  let updatedData = [...initialGlobalData];
  switch (action.type) {
    case actionTypes.LOAD_GLOBAL:
      updatedData = [...action.data];
      break;
    default:
      break;
  }
  return updatedData;
};

export default globalDataReducers;
