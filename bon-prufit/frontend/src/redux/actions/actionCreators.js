import axios from 'axios';
import actionTypes from './actionTypes';

const productsUrl = 'http://localhost:2021/products';

export function loadProducts() {
  return async (dispatch) => {
    const { data } = await axios(productsUrl);
    dispatch({
      type: actionTypes.LOAD_PRODUCTS,
      products: data
    });
    dispatch({
      type: actionTypes.ERROR_PRODUCT
    });
  };
}

export function loadCart() {
  return ({
    type: actionTypes.LOAD_CART
  });
}

export function addProductToCart(product) {
  return ({
    type: actionTypes.ADD_PRODUCT,
    product
  });
}

export function deleteProductFromCart(productId) {
  return ({
    type: actionTypes.DELETE_PRODUCT,
    productId
  });
}
