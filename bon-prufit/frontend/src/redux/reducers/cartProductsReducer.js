import actionTypes from '../actions/actionTypes';

function cartProductsReducer(cart = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_PRODUCTS:
      return action.cart;

    case actionTypes.DELETE_PRODUCT:
      return cart.filter((product) => product.id !== action.productId);

    case actionTypes.ADD_PRODUCT:
      return [
        ...cart,
        action.product
      ];

    case actionTypes.UPDATE_PRODUCT:
      return cart.map(
        (product) => (product.id === action.product.id
          ? { ...product, ...action.product }
          : product)
      );

    default:
      return cart;
  }
}

export default cartProductsReducer;
