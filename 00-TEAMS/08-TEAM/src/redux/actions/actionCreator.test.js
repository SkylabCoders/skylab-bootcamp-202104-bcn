import axios from 'axios';
import { loadGlobalData } from './actionCreators';

jest.mock('axios');
const url = 'https://covid-api.mmediagroup.fr/v1/cases';

describe('loadGlobalData', () => {
  test('should dispatch LOAD_GLOBAL', async () => {
    axios.mockResolvedValue({ data: { Global: { All: { skylab: 'Yes' } } } });

    const dispatch = jest.fn();
    // act
    await loadGlobalData(url)(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'LOAD_GLOBAL'
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
