/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/actionTypes';

function cartReducer(products = [], action) {
  const newProducts = [...products];
  switch (action.type) {
    case actionTypes.DELETE_PRODUCT:
      newProducts.splice(newProducts.findIndex((product) => (
        product._id === action.product._id), 1));
      return newProducts;
    case actionTypes.ADD_PRODUCTS:
      return [...products, action.product];
    case actionTypes.DELETE_ALL:
      return [];

    default:
      return products;
  }
}

export default cartReducer;
