import mockProducts from '../../constants/products.mock';
import actionTypes from '../actions/actionTypes';

function productsReducer(products = [], action) {
  if (action.type === actionTypes.LOAD_PRODUCTS) {
    return mockProducts;
  }
  return products;
}

export default productsReducer;
