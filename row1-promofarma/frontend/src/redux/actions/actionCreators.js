/* eslint-disable no-debugger */
import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://192.168.0.40:2022/products';

export function loadProducts() {
  return async (dispatch) => {
    try {
      const { data } = await axios(url);
      dispatch({
        type: actionTypes.LOAD_PRODUCTS,
        products: data
      });
    } catch (error) {
      dispatch({
        type: 'LOAD_PRODUCTS_ERROR'
      });
    }
  };
}

export function addProducts(newProduct) {
  return {
    type: actionTypes.ADD_PRODUCTS,
    newProduct
  };
}

export function deleteProduct(productId) {
  return {
    type: actionTypes.DELETE_PRODUCT,
    data: productId
  };
}

export function deleteAll(products) {
  debugger;
  return {
    type: actionTypes.DELETE_ALL,
    data: products
  };
}
