import axios from 'axios';
import actionTypes from './actionTypes';
import { loadProducts, addToCart } from './actionCreator';

jest.mock('axios');

describe('loadProducts function', () => {
  test('should dispatch LOAD_PRODUCT', async () => {
    const dispatch = jest.fn();
    axios.mockResolvedValue('skylab');

    await loadProducts()(dispatch);

    expect(dispatch).toHaveBeenCalled();
  });
  test('should dispatch LOAD_PRODUCT_ERROR', async () => {
    axios.mockResolvedValue();
    const dispatch = jest.fn();

    await loadProducts()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_PRODUCT_ERROR
    });
  });
});

describe('addToCart function', () => {
  test('should dispatch ADD_PRODUCTS_TO_CART', async () => {
    const dispatch = jest.fn();
    axios.post.mockResolvedValue('skylab');

    await addToCart({ hola: 'anna' })(dispatch);

    expect(dispatch).toHaveBeenCalled();
  });
});
