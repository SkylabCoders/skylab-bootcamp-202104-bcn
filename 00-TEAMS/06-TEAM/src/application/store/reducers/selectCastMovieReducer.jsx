import actionTypes from '../actions/actionTypes';

function castReducer(cast = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_CAST:
      return action.cast;
    default:
      return cast;
  }
}

export default castReducer;
