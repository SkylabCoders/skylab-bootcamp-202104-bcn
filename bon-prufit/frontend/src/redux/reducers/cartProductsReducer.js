/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/actionTypes';

function cartProductsReducer(cart = [], action) {
  let updatedCart = [...cart];

  switch (action.type) {
    case actionTypes.LOAD_CART:
      updatedCart = cart;
      break;
    case actionTypes.DELETE_PRODUCT:
      updatedCart = cart.filter((product) => product._id !== action.productId);
      break;
    case actionTypes.ADD_PRODUCT:
      updatedCart = [
        ...cart,
        action.product
      ];
      break;
    default:
      updatedCart = cart;
  }
  return updatedCart;
}

export default cartProductsReducer;
