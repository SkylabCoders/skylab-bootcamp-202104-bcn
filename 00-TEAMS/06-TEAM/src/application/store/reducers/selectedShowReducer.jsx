import actionTypes from '../actions/actionTypes';

function showsReducer(show = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_SHOW:
      return action.show;
    default:
      return show;
  }
}

export default showsReducer;
