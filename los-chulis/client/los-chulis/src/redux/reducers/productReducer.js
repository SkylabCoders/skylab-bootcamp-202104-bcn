import actionTypes from '../actions/actionTypes';
import PRODUCTS from '../../constants/products.mock';

export default function productReducer(action) {
  if (action.type === actionTypes.LOAD_PRODUCT) {
    return PRODUCTS;
  }
  return null;
}
