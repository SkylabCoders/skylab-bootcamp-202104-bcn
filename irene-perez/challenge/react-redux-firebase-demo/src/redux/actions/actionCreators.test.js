import firebase from 'firebase';
import { login, logout } from './actionCreators';

jest.mock('firebase');

describe('Given a login function', () => {
  describe('When is invoked', () => {
    describe('And there is an error', () => {
      test('Then dispatch an action type LOGIN_ERROR', async () => {
        const dispatch = jest.fn();
        firebase.auth.mockReturnValueOnce({
          signInWithPopup: jest.fn().mockRejectedValueOnce()
        });

        await login()(dispatch);

        expect(dispatch).toHaveBeenCalledWith({
          type: 'LOGIN_ERROR'
        });
      });
    });

    test('Then dispatch an action type LOGIN', async () => {
      const dispatch = jest.fn();
      firebase.auth.mockReturnValueOnce({
        signInWithPopup: jest.fn().mockResolvedValueOnce({
          user: {
            name: 'My name',
            email: 'my@email.com'
          }
        })
      });

      await login()(dispatch);

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

describe('Given a logout function', () => {
  describe('When is invoked', () => {
    describe('And there is an error', () => {
      test('Then dispatch an action type LOGIN_ERROR', async () => {
        const dispatch = jest.fn();
        firebase.auth.mockReturnValueOnce({
          signOut: jest.fn().mockRejectedValueOnce()
        });

        await logout()(dispatch);

        expect(dispatch).toHaveBeenCalledWith({
          type: 'LOGIN_ERROR'
        });
      });
    });

    test('Then dispatch an action type LOGIN', async () => {
      const dispatch = jest.fn();
      firebase.auth.mockReturnValueOnce({
        signOut: jest.fn().mockResolvedValueOnce()
      });

      await logout()(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: 'LOGOUT'
      });
    });
  });
});
