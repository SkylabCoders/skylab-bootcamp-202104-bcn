import actionTypes from '../actions/actionTypes';

function selectedItemReducer(item = [], action) {
  debugger
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      return [
        ...item,
        action.item
      ];
      
    case actionTypes.LOAD_ITEM:
      return item;

    default:
      return item;
  }
}

export default selectedItemReducer;
