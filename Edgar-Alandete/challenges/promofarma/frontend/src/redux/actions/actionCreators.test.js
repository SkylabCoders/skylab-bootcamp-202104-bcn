import axios from 'axios';
import {
  loadProducts, addProduct, deleteProduct, deleteAll
} from './actionCreators';
import actionTypes from './actionTypes';

jest.mock('axios');

describe('Given a loadProdcuts actionCreator', () => {
  const products = { data: [{ id: 1, name: 'salami' }] };
  const dispatch = jest.fn();
  describe('When the promise is resolved', () => {
    test('Then should dispatch a LOAD_PRODUCTS action', async () => {
      axios.mockResolvedValue(products);
      await loadProducts()(dispatch);
      expect(dispatch).toHaveBeenCalledWith(
        {
          type: actionTypes.LOAD_PRODUCTS,
          products: products.data
        }
      );
    });
  });

  describe('When the promise is rejected', () => {
    test('Then should dispatch a LOAD_PRODUCTS_ERROR action', async () => {
      axios.mockRejectedValue();
      await loadProducts()(dispatch);
      expect(dispatch).toHaveBeenCalledWith(
        {
          type: actionTypes.LOAD_PRODUCTS_ERROR
        }
      );
    });
  });
});

describe('Given an addProduct actionCreator', () => {
  const product = { id: 1, name: 'Crema solar' };
  describe('When its called with a product that is not in the cart', () => {
    test('Then should add a new product to the cart', () => {
      const productReturned = addProduct(product);
      expect(productReturned).toEqual({
        type: actionTypes.ADD_PRODUCTS,
        product
      });
    });
  });
});

describe('Given a deleteProduct actionCreator', () => {
  const product = { id: 1, name: 'Crema solar' };
  describe('When its called with a product from cart that we want to delete', () => {
    test('Then the product has to be removed from the cart', () => {
      const productToDelete = deleteProduct(product, 0);
      expect(productToDelete).toEqual({
        type: actionTypes.DELETE_PRODUCT,
        product: {
          ...product, index: 0
        }
      });
    });
  });
});

describe('Given a deleteAll actionCreator', () => {
  describe('When we want to remove all the products from the cart', () => {
    test('Then the DELETE_ALL acion is called', () => {
      const deleteAllResult = deleteAll();
      expect(deleteAllResult).toEqual({ type: actionTypes.DELETE_ALL });
    });
  });
});
