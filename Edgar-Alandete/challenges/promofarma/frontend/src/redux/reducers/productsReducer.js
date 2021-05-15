/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/actionTypes';

function productsReducer(products = [], action) {
  let newProducts = [...products];
  if (action.type === actionTypes.LOAD_PRODUCTS) {
    newProducts = action.products;
  }

  if (action.type === actionTypes.ADD_PRODUCTS) {
    newProducts = newProducts.map(
      (product) => (product._id === action.product._id
        ? { ...product, ...action.product }
        : product)
    );
  }
  return newProducts;
}

export default productsReducer;
