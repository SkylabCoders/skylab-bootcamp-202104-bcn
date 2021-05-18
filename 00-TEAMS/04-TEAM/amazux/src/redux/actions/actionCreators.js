import actionTypes from './actionTypes';
import apiServices from '../../services/api';

export const signIn = (user) => ({
  type: actionTypes.AUTH_LOGIN,
  user
});

export const signOut = () => ({
  type: actionTypes.AUTH_LOGOUT
});

export const deleteError = () => ({ type: actionTypes.DELETE_ERROR });

export const loadProductsActionCreator = (products) => (
  { type: actionTypes.LOAD_PRODUCTS, products }
);

export const loadProducts = () => async (dispatch) => {
  const response = await apiServices.getProductsFromApi();
  if (!response.error) {
    dispatch(loadProductsActionCreator(response.data));
  } else {
    dispatch({
      type: actionTypes.LOAD_ERROR,
      error: response.error
    });
  }
};

export const addProduct = (product) => ({
  type: actionTypes.ADD_PRODUCT,
  product
});

export const deleteProduct = (productName) => ({
  type: actionTypes.DELETE_PRODUCT,
  productName
});
