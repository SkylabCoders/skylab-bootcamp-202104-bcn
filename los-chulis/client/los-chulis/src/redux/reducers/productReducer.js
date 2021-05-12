import actionTypes from '../actions/actionTypes';
import products from '../../constants/products.mock';

function productReducers(productsList = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_PRODUCT:
      return products;

    default:
      return productsList;
  }
}

export default productReducers;
