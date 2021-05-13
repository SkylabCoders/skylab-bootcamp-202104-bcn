import actionTypes from '../actions/actionTypes';

function selectedItemReducer(item = [], action) {
  debugger
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      return [
        ...item,
        action.item
      ];
    case actionTypes.DELETE_ITEM:
      return item.filter((element) => element.id !== action.itemId);

    default:
      return item;
  }
}

export default selectedItemReducer;
