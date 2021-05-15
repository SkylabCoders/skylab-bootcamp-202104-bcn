import axios from 'axios';
import actionTypes from './actionTypes';
import {
  loadProducts,
  addToCart,
  loadCart,
  deleteFromCart,
  updateCart
} from './actionCreator';

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
  test('should dispatch ADD_PRODUCTS_TO_CART', () => {
    const result = addToCart({ hola: 'anna' });

    expect(result).toStrictEqual({
      type: actionTypes.ADD_PRODUCTS_TO_CART,
      product: { hola: 'anna' }
    });
  });
});

describe('loadCart function', () => {
  test('should dispatch LOAD_CART_PRODUCT', () => {
    const result = loadCart();

    expect(result).toStrictEqual({
      type: actionTypes.LOAD_CART_PRODUCT
    });
  });
});

describe('deleteFromCart function', () => {
  test('should dispatch DELETE_CART_PRODUCT', () => {
    const result = deleteFromCart({ hola: 'anna' });

    expect(result).toStrictEqual({
      type: actionTypes.DELETE_CART_PRODUCT,
      product: { hola: 'anna' }
    });
  });
});

describe('updateCart function', () => {
  test('should dispatch UPDATE_PRODUCTS', async () => {
    const product = { data: 'hola' };
    const dispatch = jest.fn();
    axios.put.mockResolvedValue(product);

    await updateCart(product)(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.UPDATE_PRODUCTS,
      product: product.data
    });
  });
});

// const task = { data: { text: 'Hola', state: false } };
// axios.put.mockResolvedValue(task);
// const dispatch = jest.fn();
// await doneTask(task)(dispatch);
// expect(dispatch).toHaveBeenCalledWith({
//   type: actionTypes.DONE_TASK,
//   updateTask: task.data,
// });
