/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/actionTypes';

export default function productReducer(products = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_PRODUCT:
      return action.products;
    case actionTypes.UPDATE_PRODUCTS:
      return products.map(
        (product) => (product._id === action.product._id
          ? { ...product, ...action.product }
          : product)
      );
    default:
      return products;
  }
}
