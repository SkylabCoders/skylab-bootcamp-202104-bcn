import actionTypes from './actionTypes';

export function addProducts(newProduct) {
  return {
    type: actionTypes.ADD_PRODUCTS,
    newProduct
  };
}

export function loadProducts() {
  return {
    type: actionTypes.LOAD_PRODUCTS
  };
}

export function deleteProduct() {
  return {
    type: actionTypes.DELETE_PRODUCT
  };
}

export function deleteAll() {
  return {
    type: actionTypes.DELETE_ALL
  };
}
