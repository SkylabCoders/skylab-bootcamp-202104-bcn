import actionTypes from '../actions/actionTypes';

function castReducer(cast = {}, action) {
  // eslint-disable-next-line no-debugger
  debugger;
  switch (action.type) {
    case actionTypes.LOAD_CAST:
      return action.cast;
    default:
      return cast;
  }
}

export default castReducer;
