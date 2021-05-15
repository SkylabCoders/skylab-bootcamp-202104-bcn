/* eslint-disable no-case-declarations */
/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/actionTypes';

function cartReducer(cart = [], action) {
  let newCart = [...cart];
  switch (action.type) {
    case actionTypes.DELETE_PRODUCT:
      newCart = cart.filter((item) => item._id !== action.product._id);
      break;
    case actionTypes.ADD_PRODUCTS:
      let productToAdd;
      const item = newCart
        .find(({ _id }) => action.product._id === _id);

      if (item) {
        newCart = newCart.map(
          // eslint-disable-next-line no-return-assign
          (product) => (action.product._id === product._id
            ? { ...product, quantity: item.quantity += 1 }
            : product)
        );
      } else {
        productToAdd = { ...action.product, quantity: 1 };
        newCart = [...newCart, productToAdd];
      }
      break;
    case actionTypes.DELETE_ALL:
      newCart = [];
      break;

    default:
      return cart;
  }

  return newCart;
}

export default cartReducer;
