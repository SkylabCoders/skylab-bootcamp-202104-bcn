import actionTypes from './actionTypes';
import { signIn, signOut, deleteError } from './actionCreators';

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
});
