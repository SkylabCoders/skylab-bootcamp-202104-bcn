import actionTypes from '../actions/actionTypes';

function cartReducer(cartList = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_CART_PRODUCT:
      return action.products;

    case actionTypes.ADD_PRODUCTS_TO_CART:
      return [...cartList, action.product];

    default:
      return cartList;
  }
}

export default cartReducer;
