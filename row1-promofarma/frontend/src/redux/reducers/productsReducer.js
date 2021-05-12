import actionTypes from '../actions/actionTypes';

function productsReducer(products = [], action) {
  if (action.type === actionTypes.LOAD_PRODUCTS) {
    return action.products;
  }
  return products;
}

export default productsReducer;
