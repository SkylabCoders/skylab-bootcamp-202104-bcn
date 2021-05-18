import actionTypes from '../actions/actionTypes';

function cartReducer(cart = [], action) {
  const updateCart = [...cart];

  switch (action.type) {
    case actionTypes.LOAD_CART:
      return updateCart;

    case actionTypes.ADD_PRODUCT:
      return [...cart, action.product];

    case actionTypes.DELETE_PRODUCT:
      return updateCart.filter((product) => product.name
        !== action.productName);

    default:
      break;
  }

  return updateCart;
}
export default cartReducer;
