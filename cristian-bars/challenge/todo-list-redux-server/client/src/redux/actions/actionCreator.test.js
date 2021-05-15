import axios from 'axios';
import { loadTasks, addTask, deleteTask } from './actionCreator';

jest.mock('axios');
jest.mock('./actionTypes');

describe('When invoked a loadTasks func', () => {
  test('should return and async function', async () => {
    axios.mockResolvedValueOnce({ task: 'Cristian' });
    const dispatch = jest.fn();
    await loadTasks()(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});

describe('When invoked a addTask func', () => {
  test('should call a async func', async () => {
    axios.post.mockResolvedValueOnce({ data: 'Pepe' });
    const dispatch = jest.fn();
    await addTask()(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});
