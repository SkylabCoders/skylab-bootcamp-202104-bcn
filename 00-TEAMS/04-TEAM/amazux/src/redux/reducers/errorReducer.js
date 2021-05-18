import actionTypes from '../actions/actionTypes';

function errorReducer(error = {}, action) {
  let updatedError = { ...error };

  switch (action.type) {
    case actionTypes.LOAD_ERROR:
      updatedError = { ...error, message: action.error };
      break;
    case actionTypes.DELETE_ERROR:
      updatedError = {};
      break;
    default:
      break;
  }
  return updatedError;
}

export default errorReducer;
