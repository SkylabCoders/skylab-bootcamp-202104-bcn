import actionTypes from '../../redux/Actions/actionTypes';
import authreducer from '../../redux/Reducers/authReducer';

const {
  AUTH_LOGIN,
  AUTH_LOGOUT

} = actionTypes;

describe('Given an Auth action reducer function and an AUTH LOGIN payload', () => {
  test('Should change selected state to logged in to true', () => {
    const auth = {};
    const action = { type: AUTH_LOGIN };
    const result = {
      isLoggedIn: true
    };

    expect(result).toEqual(authreducer(auth, action));
  });
});

describe('Given an Auth action reducer function and an AUTH LOGIN payload', () => {
  test('Should change selected state to logged in to false', () => {
    const auth = {};
    const action = { type: AUTH_LOGOUT };
    const result = { isLoggedIn: false };

    expect(result).toEqual(authreducer(auth, action));
  });
});
