/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/actionTypes';

function cartProductsReducer(cart = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_CART:
      return cart;

    case actionTypes.DELETE_PRODUCT:
      return cart.filter((product) => product._id !== action.productId);

    case actionTypes.ADD_PRODUCT:
      return [
        ...cart,
        action.product
      ];
    default:
      return cart;
  }
}

export default cartProductsReducer;
