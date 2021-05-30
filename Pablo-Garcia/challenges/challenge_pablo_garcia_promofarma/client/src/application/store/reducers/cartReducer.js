import actionTypes from '../actions/actionTypes';

function reducer(cart = [], action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return [...cart, action.data];
    case actionTypes.REMOVE_FROM_CART:
      return cart.filter((item) => item._id !== action.data._id);
    case actionTypes.REMOVE_ALL_FROM_CART:
      return [];
    default:
      return cart;
  }
}

export default reducer;
