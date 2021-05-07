import actionTypes from '../actions/actionTypes';

function cartReducer(cart = [], action) {
  const updateCart = [...cart];

  switch (action.type) {
    case actionTypes.LOAD_CART:
      return updateCart;

    case actionTypes.ADD_PRODUCT:
      return [...cart, action.product];

    case actionTypes.DELETE_PRODUCT:
      return updateCart.filter((x) => x.fakeIdProduct
        !== action.fakeIdProduct);// falta fakeIdProduct

    default:
      break;
  }

  return updateCart;
}
export default cartReducer;
