import axios from 'axios';
import {
  loadCart, loadProducts, addProductToCart, deleteProductFromCart
} from './actionCreators';

jest.mock('axios');

describe('loadProducts', () => {
  test('should dispatch LOAD_PRODUCTS', async () => {
    const dispatch = jest.fn();
    const data = [{ product: 'solar' }];
    axios.mockResolvedValue(data);
    await loadProducts()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({ type: 'LOAD_PRODUCTS' });
  });
});

describe('loadCart', () => {
  test('should return LOAD_CART', () => {
    const action = loadCart();
    expect(action).toStrictEqual({ type: 'LOAD_CART' });
  });
});

describe('addProductToCart', () => {
  test('should return ADD_PRODUCT', () => {
    const product = {};
    const action = addProductToCart(product);
    expect(action).toStrictEqual({
      type: 'ADD_PRODUCT',
      product
    });
  });
});

describe('deleteProductFromCart', () => {
  test('should return DELETE_PRODUCT', () => {
    const productId = Number;
    const action = deleteProductFromCart(productId);
    expect(action).toStrictEqual({
      type: 'DELETE_PRODUCT',
      productId
    });
  });
});
