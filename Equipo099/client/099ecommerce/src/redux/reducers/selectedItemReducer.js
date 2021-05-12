import actionTypes from '../actions/actionTypes';

function selectedItemReducer(item = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_ITEM:
      return action.item;

    default:
      return item;
  }
}

export default selectedItemReducer;
