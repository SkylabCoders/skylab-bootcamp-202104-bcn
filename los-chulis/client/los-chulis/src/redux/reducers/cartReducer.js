import actionTypes from '../actions/actionTypes';

function cartReducer(cartList = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_CART_PRODUCT:
      return cartList;

    case actionTypes.ADD_PRODUCTS_TO_CART:
      return [...cartList, action.product];

    case actionTypes.DELETE_CART_PRODUCT:
      cartList.splice(cartList.indexOf(action.product), 1);
      return cartList;
    default:
      return cartList;
  }
}

export default cartReducer;
