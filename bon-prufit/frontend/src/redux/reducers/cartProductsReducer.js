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

    case actionTypes.UPDATE_PRODUCT:
      return cart.map(
        const productToDeleteIndex = cart.indexOf( product => product._id)
        (product) => (product.id === action.product.id
          ? { ...product, ...action.product }
          : product)
      );

    default:
      return cart;
  }
}

export default cartProductsReducer;
