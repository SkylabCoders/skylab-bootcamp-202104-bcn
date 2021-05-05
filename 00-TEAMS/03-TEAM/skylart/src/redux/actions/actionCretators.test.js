import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fecth-mock';
import actionTypes from './actionTypes';
import * as actions from './actionCreators';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it('creates LOAD_ARTWORKS when async await has been done', () => {
    const url = 'https://collectionapi.metmuseum.org/public/collection/v1/departments';
    fetchMock.getOnce('/departments', {
      artwork: data.departments,
    });
    const expectedActions = [
      { type: actionTypes.LOAD_ARTWORKS, artwork: data.department },
    ];
    const store = mockStore({ artworks: [] });
    return store.dispatch(actions.loadArtworksFromApi(url)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
