import axios from 'axios';
import { loadCategory } from './actionCreators';
import actionTypes from './actionTypes';

jest.mock('axios');

describe('loadCategroy function', () => {
  test.only('should dispatch LOAD_CATEGORY', async () => {
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
