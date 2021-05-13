import axios from 'axios';
import actionType from './actionType';
import { addTask, loadTasks } from './actionCreator';

jest.mock('axios');

describe('When invoked loadTasks function', () => {
  test('Should return a func', async () => {
    const dispatch = jest.fn();
    axios.mockResolvedValue();
    await loadTasks()(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});

describe('When invoked loadTasks function', () => {
  test('Should return an error', async () => {
    const dispatch = jest.fn();
    axios.mockRejectedValue();
    await loadTasks()(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});

describe('When invoked and addTask func', () => {
  test('Should return a async func', async () => {
    const dispatch = jest.fn();
    const task = 'Pepe';
    axios.post.mockResolvedValueOnce({ data: 'Pepe' });
    await addTask(task)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionType.ADD_TASK,
      task: 'Pepe'
    });
  });
});
