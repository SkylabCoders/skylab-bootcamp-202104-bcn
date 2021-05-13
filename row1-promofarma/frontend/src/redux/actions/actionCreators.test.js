import axios from 'axios';
import { loadProducts } from './actionCreators';
import actionTypes from './actionTypes';

jest.mock('axios');

const products = {
  data:
        [{ id: 1, name: 'salami' }]
};

describe('Given a loadProdcuts actionCreator', () => {
  test('should dispatch a LOAD_PRODUCTS action', async () => {
    axios.mockResolvedValue(products);
    const dispatch = jest.fn();
    await loadProducts()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(
      {
        type: actionTypes.LOAD_PRODUCTS,
        products: products.data
      }
    );
  });

  test('should dispatch a LOAD_PRODUCTS_ERROR action', async () => {
    axios.mockRejectedValue();
    const dispatch = jest.fn();
    await loadProducts()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(
      {
        type: actionTypes.LOAD_PRODUCTS_ERROR
      }
    );
  });
});
