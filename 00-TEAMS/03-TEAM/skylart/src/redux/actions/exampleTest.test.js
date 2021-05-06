import axios from 'axios';
import { loadCategory } from './redux/actions/actionCreators';

describe('loadCategroy function', () => {
  test('should dispatch LOAD_CATEGORY', async () => {
    axios.mockResolvedValue({ data: ['hello world'] });
    const dispatch = jest.fn();

    await loadCategory()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_CATEGORY,
      detail: ['hello'],
      artworkId,

    });
  });
});
