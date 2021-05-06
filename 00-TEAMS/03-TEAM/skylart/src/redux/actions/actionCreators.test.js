import axios from 'axios';
import actionTypes from './actionTypes';
import * as actions from './actionCreators';
import { loadArtworksFromApi, loadCategory } from './actionCreators';

jest.mock('axios');

// Test Anna

describe('loadArtworksFromApi function', () => {
  test('should dispatch LOAD_ARTWORKS', async () => {
    axios.mockResolvedValue({ data: { objectIDs: 10 } });
    const dispatch = jest.fn();

    await loadArtworksFromApi()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_ARTWORKS,
      artwork: 10,
    });
  });

  test('should dispatch LOAD_ERROR', async () => {
    axios.mockRejectedValue();
    const dispatch = jest.fn();

    await loadArtworksFromApi()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: 'LOAD_ERROR',
    });
  });
});

describe('loadCategory function', () => {
  test('should dispatch LOAD_CATEGORY', async () => {
    axios.mockResolvedValue({ data: ['hello world'] });
    const dispatch = jest.fn();
    const artworkId = 10;

    await loadCategory(artworkId)(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_CATEGORY,
      detail: ['hello world'],
      artworkId: 10,
    });
  });
});

describe('loadDetail function', () => {
  test('should return action', () => {
    const detail = { name: 'ArtWorkName' };
    const expectedAction = {
      type: actionTypes.LOAD_DETAIL,
      detail,
    };
    expect(actions.loadDetail(detail)).toEqual(expectedAction);
  });
});

describe('login function', () => {
  test('should create an action to login user', () => {
    const user = 'Laura';
    const expectedAction = {
      type: actionTypes.AUTH_LOGIN,
      user,
    };
    expect(actions.login(user)).toEqual(expectedAction);
  });
});

describe('logout function', () => {
  test('should create an action to logout', () => {
    const expectedAction = {
      type: actionTypes.AUTH_LOGOUT,
    };
    expect(actions.logout()).toEqual(expectedAction);
  });
});
