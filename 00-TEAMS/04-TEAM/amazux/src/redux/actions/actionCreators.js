import actionTypes from './actionTypes';
import apiServices from '../../services/api';

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
