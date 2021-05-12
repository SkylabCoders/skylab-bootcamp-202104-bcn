/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/actionTypes';

function cartProductsReducer(cart = { maxId: 0, products: [] }, action) {
  let updatedCart = { ...cart };
  const newProduct = { ...action.product, id: cart.maxId + 1 };

  switch (action.type) {
    case actionTypes.LOAD_CART:
      updatedCart = cart;
      break;
    case actionTypes.DELETE_PRODUCT:
      updatedCart = {
        ...cart,
        products: cart.products.filter((product) => product._id !== action.productId)
      };
      break;
    case actionTypes.ADD_PRODUCT:
      updatedCart = { ...cart, products: [...cart.products, newProduct], maxId: cart.maxId + 1 };

      break;
    default:
      updatedCart = cart;
  }
  return updatedCart;
}

export default cartProductsReducer;
