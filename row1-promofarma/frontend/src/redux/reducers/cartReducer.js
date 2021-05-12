import actionTypes from '../actions/actionTypes';

function cartReducer(products = [], action) {
  switch (action.type) {
    case actionTypes.DELETE_PRODUCT:
      return action.data;
    case actionTypes.ADD_PRODUCTS:
      return [...products, action.product];
    case actionTypes.DELETE_ALL:
      return [];

    default:
      return products;
  }
}

export default cartReducer;
