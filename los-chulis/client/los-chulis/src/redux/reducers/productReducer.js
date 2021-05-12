import actionTypes from '../actions/actionTypes';
// import PRODUCTS from '../../constants/products.mock';

export default function productReducer(products = [], action) {
  if (action.type === actionTypes.LOAD_PRODUCT) {
    return action.products;
  }
  return products;
}
