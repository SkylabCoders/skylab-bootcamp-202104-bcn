import actionTypes from '../actions/actionTypes';
import PRODUCTS from '../../constants/products.mock';

function productReducers(productsList = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_PRODUCT:
      return PRODUCTS;

    default:
      return productsList;
  }
}

export default productReducers;
