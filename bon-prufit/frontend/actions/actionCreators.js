import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://localhost:2021/heroes';

export function loadProducts() {
  return async (dispatch) => {
    try {
      const { data } = await axios(url);
      dispatch({
        type: actionTypes.LOAD_PRODUCTS,
        prducts: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.ERROR
      });
    }
  };
}

export function addProduct(product) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(url, product);
      dispatch({
        type: actionTypes.ADD_PRODUCT,
        product: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.ERROR,
      });
    }
  };
}

export function deleteProduct(productId) {
  return async (dispatch) => {
    await axios.delete(`${url}/${productId}`);
    dispatch({
      type: actionTypes.DELETE_PRODUCT,
      productId,
    });
  };
}


