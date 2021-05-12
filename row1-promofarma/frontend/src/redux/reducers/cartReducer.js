import actionTypes from '../actions/actionTypes';

function cartReducer(products = [], action) {
  switch (action.type) {
    case actionTypes.ADD_PRODUCTS:
      return action.data;

    case action.DELETE_PRODUCT:
      return action.data;

    case action.DELETE_ALL:
      return action.data;

    default:
      return products;
  }
}

export default cartReducer;
