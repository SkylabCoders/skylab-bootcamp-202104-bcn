import actionTypes from '../actions/actionTypes';

function cartReducer(cartList = [], action) {
  const updateCart = [...cartList];

  switch (action.type) {
    case actionTypes.LOAD_CART_PRODUCT:
      return updateCart;

    case actionTypes.ADD_PRODUCTS_TO_CART:
      return [...cartList, action.product];

    default:
      return updateCart;
  }
}

export default cartReducer;
