/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/actionTypes';

function productsReducer(products = [], action) {
  let newProducts = [...products];

  switch (action.type) {
    case actionTypes.LOAD_PRODUCTS:
      newProducts = action.products;
      break;
    case actionTypes.ADD_PRODUCTS:
      newProducts = newProducts.map(
        (product) => (product._id === action.product._id
          ? { ...product, ...action.product }
          : product)
      );
      break;
    default:
      break;
  }

  return newProducts;
}

export default productsReducer;
