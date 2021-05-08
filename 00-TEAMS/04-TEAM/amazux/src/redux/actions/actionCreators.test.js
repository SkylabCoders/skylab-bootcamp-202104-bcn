import actionTypes from './actionTypes';
import {
  signIn, signOut, deleteError, loadProductsActionCreator, loadProducts
} from './actionCreators';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => ({ rates: { CAD: 1.42 } })
}));

const dispatch = jest.fn();

describe('ActionCreators', () => {
  test('singIn should return an action, with an actionType AUTH_LOGIN a user', () => {
    const user = {
      name: 'Mickey',
      lastName: 'Johnson'
    };
    const result = signIn(user);
    expect(result).toEqual({
      type: actionTypes.AUTH_LOGIN,
      user: {
        name: 'Mickey',
        lastName: 'Johnson'
      }
    });
  });
  test('singOut should return an action, with an actionType AUTH_LOGOUT', () => {
    const result = signOut();
    expect(result).toEqual({
      type: actionTypes.AUTH_LOGOUT
    });
  });

  test('deleteErorr should return an action, with an actionType DELETE_ERROR', () => {
    const result = deleteError();
    expect(result).toEqual({ type: actionTypes.DELETE_ERROR });
  });

  test('loadProductsActionCreator should return an action, with an actionType LOAD_PRODUCTS, and a products array', () => {
    const result = loadProductsActionCreator([{}, {}]);
    expect(result).toEqual({ type: actionTypes.LOAD_PRODUCTS, products: [{}, {}] });
  });

  test('loadProducts should return an action, with an actionType LOAD_PRODUCTS and a products array', async () => {
    await loadProducts()(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});
