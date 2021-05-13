import axios from 'axios';
import { loadList } from './actionCreators';
import actionTypes from './actionTypes';

jest.mock('axios');

describe('loadList', () => {
  test('should dispatch LOAD_HEROES_ERROR', async () => {
    const loadListResponse = loadList();
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockRejectedValue(),
    });
    const dispatch = jest.fn();
    await loadListResponse(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'LOAD_LIST_ERROR',
    });
  });

  test('should dispatch LOAD_LIST', async () => {
    const loadListResponse = loadList();
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn(),
    });
    const dispatch = jest.fn();
    await loadListResponse(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_LIST,
    });
  });
});
