import actionTypes from './actionTypes';
import apiServices from '../../services/api';

export const loadProductsActionCreator = (products) => (
  { type: actionTypes.LOAD_PRODUCTS, products }
);

export const loadProducts = () => async (dispatch) => {
  const productsResponse = await apiServices.getProductsFromApi();
  dispatch(loadProductsActionCreator(productsResponse));
};
