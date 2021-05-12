import actionTypes from '../actions/actionTypes';

function itemsReducer(items = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_ITEMS:
      return action.items;

    case actionTypes.DELETE_ITEM:
      return action.items;

    case actionTypes.ADD_ITEM:
      return action.items;

    case actionTypes.UPDATE_ITEM:
      return action.items;

    default:
      return items;
  }
}

export default itemsReducer;
