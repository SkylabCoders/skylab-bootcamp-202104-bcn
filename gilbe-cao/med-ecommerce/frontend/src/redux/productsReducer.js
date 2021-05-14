import actionTypes from './actionTypes';

function reducer(products = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_PRODUCTS:
      return action.products;

    default:
      return products;
  }
}

export default reducer;
