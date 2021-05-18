import actionTypes from '../actions/actionTypes';

function recomendedReducer(recomended = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_RECOMENDED:
      return action.recomended;
    default:
      return recomended;
  }
}

export default recomendedReducer;
