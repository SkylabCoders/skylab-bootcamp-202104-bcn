import actionTypes from '../actions/actionTypes';

function itemsReducer(items = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_ITEMS:
      return action.items;

    case actionTypes.DELETE_ITEM:
      return items.filter((item) => item.id !== action.itemId);

    case actionTypes.ADD_ITEM:
      return [
        ...items,
        action.item
      ];

    case actionTypes.UPDATE_ITEM:
      return items.map(
        (item) => (item.id === action.item.id
          ? { ...item, ...action.item }
          : item)
      );

    default:
      return items;
  }
}

export default itemsReducer;
