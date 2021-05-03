import actionTypes from '../actions/actionTypes';

function errorReducer(error = '', action) {
  let updatedError = { ...error };

  switch (action.type) {
    case actionTypes.LOAD_ERROR:
      updatedError = action.error;
      break;
    default:
      break;
  }
  return updatedError;
}

export default errorReducer;
