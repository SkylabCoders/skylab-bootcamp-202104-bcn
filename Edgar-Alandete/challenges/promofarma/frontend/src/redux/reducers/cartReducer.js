/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/actionTypes';

function cartReducer(products = [], action) {
  let newProducts = [...products];
  switch (action.type) {
    case actionTypes.DELETE_PRODUCT:
      newProducts.splice(newProducts.findIndex((product) => (
        product._id === action.product._id), 1));
      break;
    case actionTypes.ADD_PRODUCTS:
      newProducts = [...newProducts, action.product];
      break;
    case actionTypes.DELETE_ALL:
      newProducts = [];
      break;

    default:
      return products;
  }

  return newProducts;
}

export default cartReducer;
