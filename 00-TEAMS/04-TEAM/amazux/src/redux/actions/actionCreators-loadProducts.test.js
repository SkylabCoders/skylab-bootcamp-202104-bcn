import { loadProducts } from './actionCreators';

describe('loadProducts actionCreator', () => {
  test('should call loadProductsActionCreator', async () => {
    const dispatch = jest.fn();
    await loadProducts()(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});
