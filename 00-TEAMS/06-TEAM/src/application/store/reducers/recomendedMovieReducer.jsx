import actionTypes from '../actions/actionTypes';

function recomendedReducer(recomended = [], action) {
  // eslint-disable-next-line no-debugger
  switch (action.type) {
    case actionTypes.LOAD_RECOMENDED:
      return action.recomended;
    default:
      return recomended;
  }
}

export default recomendedReducer;
