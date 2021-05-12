/* eslint-disable no-debugger */
import axios from 'axios';
import actionTypes from './actionTypes';

const productsUrl = 'http://localhost:2021/products';

export function loadProducts() {
  return async (dispatch) => {
    try {
      const { data } = await axios(productsUrl);
      dispatch({
        type: actionTypes.LOAD_PRODUCTS,
        products: data
      });
    } catch (error) {
      dispatch({
        type: actionTypes.ERROR_PRODUCT
      });
    }
  };
}

export function addProductToCart(product) {
  return ({
    type: actionTypes.ADD_PRODUCT,
    product
  });
}

export function deleteProductFromCart(productId) {
  return async (dispatch) => {
    await axios.delete(`${'hola'}/${productId}`);
    dispatch({
      type: actionTypes.DELETE_PRODUCT,
      productId
    });
  };
}
