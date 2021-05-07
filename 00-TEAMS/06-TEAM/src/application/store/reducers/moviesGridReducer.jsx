import actionTypes from '../actions/actionTypes';

function showsGridReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_GRID_MOVIES:
      return [...action.moviesGrid];
    default:
      break;
  }
  return state;
}

export default showsGridReducer;
