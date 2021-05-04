/* eslint-disable no-debugger */
import actionTypes from '../actions/actionTypes';

const globalDataReducers = (initialGlobalData = {}, action) => {
  let updatedGlobalData;
  switch (action.type) {
    case actionTypes.LOAD_GLOBAL:
      updatedGlobalData = action.data;
      break;
    default:
      updatedGlobalData = initialGlobalData;
      break;
  }
  return updatedGlobalData;
};

export default globalDataReducers;
