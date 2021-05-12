/* eslint-disable no-debugger */
import actionTypes from '../actions/actionTypes';

function cartReducer(products = [], action) {
  switch (action.type) {
    case actionTypes.ADD_PRODUCTS:
      return action.data;

    case actionTypes.DELETE_PRODUCT:
      return action.data;

    case actionTypes.DELETE_ALL:
      debugger;
      return [];

    default:
      return products;
  }
}

export default cartReducer;
