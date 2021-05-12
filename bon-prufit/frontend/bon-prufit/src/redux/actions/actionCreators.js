import axios from 'axios';
import actionTypes from './actionTypes';

const productsUrl = 'http://localhost:2021/products';
const cartsUrl = 'http://localhost:2021/carts';

export function loadProducts() {
  return async (dispatch) => {
    try {
      const { data } = await axios(productsUrl);
      dispatch({
        type: actionTypes.LOAD_PRODUCTS,
        prducts: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.ERROR_PRODUCT
      });
    }
  };
}

export function addProductToCart(product) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(productsUrl, product);
      dispatch({
        type: actionTypes.ADD_PRODUCT,
        product: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.ERROR_PRODUCT,
      });
    }
  };
}

export function deleteProductFromCart(productId) {
  return async (dispatch) => {
    await axios.delete(`${cartsUrl}/${productId}`);
    dispatch({
      type: actionTypes.DELETE_PRODUCT,
      productId,
    });
  };
}


