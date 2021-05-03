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
  // eslint-disable-next-line no-console
  console.log('updatedGlobalData en Reducer', updatedGlobalData);
  return updatedGlobalData;
};

export default globalDataReducers;
