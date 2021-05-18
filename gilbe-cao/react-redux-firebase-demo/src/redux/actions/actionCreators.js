import actionTypes from './actionTypes';

export function login() {
  return {
    type: actionTypes.LOGIN,
    userData: {
      name: 'Gilbe',
      email: 'gilbe@skylabcoders.com',
    },
  };
}

export function logout() {
  return {
    type: actionTypes.LOGOUT,
  };
}
