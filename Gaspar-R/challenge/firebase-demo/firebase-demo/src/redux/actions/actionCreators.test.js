import firebase from 'firebase';
import { login, logout } from './actionCreators';

jest.mock('firebase');

describe('Given a login function', () => {
  describe('When is invoked', () => {
    describe('And there is an error', () => {
      test('Then dispatch an action type LOGIN_ERROR', async () => {
        // arrange
        const dispatch = jest.fn();
        firebase.auth.mockReturnValueOnce({
          signInWithPopup: jest.fn().mockRejectedValueOnce()
        });

        // act
        await login()(dispatch);

        // assert
        expect(dispatch).toHaveBeenCalledWith({
          type: 'LOGIN_ERROR'
        });
      });
    });

    test('Then dispatch an action type LOGIN', async () => {
      // arrange
      const dispatch = jest.fn();
      firebase.auth.mockReturnValueOnce({
        signInWithPopup: jest.fn().mockResolvedValueOnce({
          user: {
            name: 'My name',
            email: 'my@email.com'
          }
        })
      });

      // act
      await login()(dispatch);

      // assert
      expect(dispatch).toHaveBeenCalledWith({
        type: 'LOGIN',
        userData: {
          name: 'My name',
          email: 'my@email.com'
        }
      });
    });
  });
});

/**
 * Given a logout function
 * When is invoked
 * And there is an error
 * Then dispatch an action type LOGIN_ERROR
 *
 * Then dispatch an action type LOGOUT
 *
 */

describe('Given a logout function', () => {
  describe('When is invoked', () => {
    describe('And there is an error', () => {
      test('Then dispatch an action type LOGIN_ERROR', async () => {
        // arrange
        const dispatch = jest.fn();
        firebase.auth.mockReturnValueOnce({
          signOut: jest.fn().mockRejectedValueOnce()
        });

        // act
        await logout()(dispatch);

        // assert
        expect(dispatch).toHaveBeenCalledWith({
          type: 'LOGIN_ERROR'
        });
      });
    });

    test('Then dispatch an action type LOGIN', async () => {
      // arrange
      const dispatch = jest.fn();
      firebase.auth.mockReturnValueOnce({
        signOut: jest.fn().mockResolvedValueOnce()
      });

      // act
      await logout()(dispatch);

      // assert
      expect(dispatch).toHaveBeenCalledWith({
        type: 'LOGOUT'
      });
    });
  });
});
