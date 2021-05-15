import axios from 'axios';
import { loadTasks, addTask } from './actionCreators';

jest.mock('axios');

const dispatch = jest.fn();

describe('Given a loadTasks function', () => {
  test('should call dispatch with a task list', async () => {
    axios.get.mockResolvedValueOnce({ data: [{}] });
    await loadTasks()(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});

describe('Given a addTask function', () => {
  test('should call dispatch with a task list', async () => {
    axios.post.mockResolvedValueOnce({ data: {} });
    await addTask()(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});
