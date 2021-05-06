import detailReducer from './detailReducer';
import authReducer from './authReducer';
import actionTypes from '../actions/actionTypes';

describe('Given a detail Reducer', () => {
  describe('With Action Type LOAD_DETAIL', () => {
    test('Should return ArtWorkName', () => {
      expect(detailReducer({}, {
        type: actionTypes.LOAD_DETAIL,
        detail: { name: 'ArtWorkName' },
      })).toEqual(
        { name: 'ArtWorkName' },
      );
    });
  });
});

describe('Given a auth Reducer', () => {
  describe('With Action Type AUTH_LOGIN', () => {
    test('Should return user.name=Anna', () => {
      expect(authReducer({}, {
        type: actionTypes.AUTH_LOGIN,
        user: { name: 'Anna' },
      })).toEqual({
        isLoggedIn: true,
        user: { name: 'Anna' },
      });
    });
  });

  describe('With Action Type AUTH_LOGOUT', () => {
    test('Should return user.name=Anna', () => {
      expect(authReducer({}, {
        type: actionTypes.AUTH_LOGOUT,
        user: { name: 'Anna' },
      })).toEqual({
        isLoggedIn: false,
        user: null,
      });
    });
  });
});
