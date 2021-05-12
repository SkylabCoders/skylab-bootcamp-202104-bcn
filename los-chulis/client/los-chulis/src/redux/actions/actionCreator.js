import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://localhost:2300/products';

export function loadProducts() {
  return async (dispatch) => {
    try {
      const { data } = await axios(url);
      dispatch({
        type: actionTypes.LOAD_PRODUCT,
        products: data
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_PRODUCT_ERROR

      });
    }
  };
}

export function addToCart(product) {
  return {
    type: actionTypes.ADD_PRODUCTS_TO_CART,
    product
  };
}

export function loadCart() {
  return {
    type: actionTypes.LOAD_CART_PRODUCT
  };
}
