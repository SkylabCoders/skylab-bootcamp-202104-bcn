import actionTypes from './actionTypes';
import { signIn } from './actionCreators';

describe('ActionCreators', () => {
  test('singIn should return an action, with an actionType and a user', () => {
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
});
