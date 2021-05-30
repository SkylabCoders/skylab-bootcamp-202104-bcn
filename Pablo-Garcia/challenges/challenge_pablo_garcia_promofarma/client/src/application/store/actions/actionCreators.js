import actionTypes from './actionTypes';
import { getProducts } from '../../../common/services/product';

export function loadProducts() {
  return async (dispatch) => {
    const { data } = await getProducts();
    dispatch({
      type: actionTypes.LOAD_PRODUCTS,
      products: data
    });
  };
}

export function addToCart(product) {
  return {
    type: actionTypes.ADD_TO_CART,
    data: product
  };
}

export function removeFromCart(product) {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    data: product
  };
}

export function removeAllFromCart() {
  return {
    type: actionTypes.REMOVE_ALL_FROM_CART
  };
}
