import axios from 'axios';
import actionTypes from './actionTypes';
import * as actions from './actionCreators';
import { loadArtworksFromApi } from './actionCreators';

jest.mock('axios');

describe('actions', () => {
  it('should create an action to load a detail', () => {
    const detail = {};
    const expectedAction = {
      type: actionTypes.LOAD_DETAIL,
      detail,
    };
    expect(actions.loadDetail(detail)).toEqual(expectedAction);
  });
  test('should return action', () => {
    const detail = { name: 'ArtWorkName' };
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

  test('should dispatch LOAD_ARTWORKS', async () => {
    axios.mockResolvedValue({ data: 'hola' });
    const dispatch = jest.fn();

    await loadArtworksFromApi()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_ARTWORKS,
      artwork: 'hola',
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
