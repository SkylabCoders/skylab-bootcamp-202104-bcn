import axios from 'axios';
import { loadTasks } from './actionCreators';

jest.mock('axios');

const dispatch = jest.fn();

describe('Given a loadTasks function', () => {
  test('should call dispatch with a task list', async () => {
    axios.get.mockResolvedValueOnce({ data: [{}] });
    await loadTasks()(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});
