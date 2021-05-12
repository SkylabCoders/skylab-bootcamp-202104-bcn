import actionTypes from '../actions/actionTypes';

function productsReducer(products = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_PRODUCTS:
      return action.products;

    default:
      return products;
  }
}

export default productsReducer;
