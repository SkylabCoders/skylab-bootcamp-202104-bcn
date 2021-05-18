import actionTypes from '../actions/actionTypes';

function showsReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_SHOWS:
      return [...state, ...action.shows];
    default:
      break;
  }
  return state;
}

export default showsReducer;
