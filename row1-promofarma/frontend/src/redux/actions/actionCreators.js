import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://localhost:2022/products';

export function addProducts(product) {
  return {
    type: actionTypes.ADD_PRODUCTS,
    product
  };
}

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
        type: actionTypes.LOAD_PRODUCTS_ERROR
      });
    }
  };
}

export function deleteProduct(product, index) {
  const productToDelete = { ...product, index };
  return {
    type: actionTypes.DELETE_PRODUCT,
    product: productToDelete
  };
}

export function deleteAll(products) {
  return {
    type: actionTypes.DELETE_ALL,
    data: products
  };
}
