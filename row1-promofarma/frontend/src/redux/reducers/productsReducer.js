/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/actionTypes';

function productsReducer(products = [], action) {
  const newProducts = [...products];
  if (action.type === actionTypes.LOAD_PRODUCTS) {
    return action.products;
  }

  if (action.type === actionTypes.ADD_PRODUCTS) {
    const test = newProducts.map(
      (product) => (product._id === action.product._id
        ? { ...product, ...action.product }
        : product)
    );

    return test;
  }
  return products;
}

export default productsReducer;
