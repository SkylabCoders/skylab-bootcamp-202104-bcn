import axios from 'axios';
import actionTypes from './actionTypes';

const apiUrl = 'http://localhost:4000/api/products';

export function loadProducts() {
  return async (dispatch) => {
    const { data } = await axios(apiUrl);
    dispatch({
      type: actionTypes.LOAD_PRODUCTS,
      products: data,
    });
  };
}
export function buyProducts(cart) {
  return async (dispatch) => {
    const { data } = await axios(apiUrl, cart);
    dispatch({
      type: actionTypes.BUY_PRODUCTS,
      data,
    });
  };
}
export function addToCart(product) {
  return {
    type: actionTypes.ADD_TO_CART,
    data: product,
  };
}
export function removeFromCart(product) {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    data: product,
  };
}
export function removeAllFromCart() {
  return {
    type: actionTypes.REMOVE_ALL_FROM_CART,
  };
}
