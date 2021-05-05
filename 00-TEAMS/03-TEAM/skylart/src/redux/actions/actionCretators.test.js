import * as actions from './actionCreators';
import actionTypes from './actionTypes';

describe('actions', () => {
  it('should create an action to load a detail', () => {
    const detail = {};
    const expectedAction = {
      type: actionTypes.LOAD_DETAIL,
      detail,
    };
    expect(actions.loadDetail(detail)).toEqual(expectedAction);
  });
  it('should create an action to login user', () => {
    const user = 'Laura';
    const expectedAction = {
      type: actionTypes.AUTH_LOGIN,
      user,
    };
    expect(actions.login(user)).toEqual(expectedAction);
  });
  it('should create an action to logout', () => {
    const expectedAction = {
      type: actionTypes.AUTH_LOGOUT,
    };
    expect(actions.logout()).toEqual(expectedAction);
  });
});
