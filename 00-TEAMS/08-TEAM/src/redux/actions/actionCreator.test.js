import axios from 'axios';
import { loadGlobalData } from './actionCreators';
import actionTypes from './actionTypes';

jest.mock('axios');

describe('loadGlobalData', () => {
  test('should dispatch LOAD_GLOBAL', async () => {
    const mockData = { data: { Global: { All: { skylab: 'Yes' } } } };
    axios.mockResolvedValue(mockData);

    const dispatch = jest.fn();
    // act
    await loadGlobalData()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_GLOBAL,
      data: mockData.data.Global.All
    });
  });

  test('should dispatch LOAD_GLOBAL_ERROR', async () => {
    axios.mockRejectedValue();
    const dispatch = jest.fn();
    // act
    await loadGlobalData()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: 'LOAD_GLOBAL_ERROR'
    });
  });
});
