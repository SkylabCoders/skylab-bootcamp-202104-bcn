import axios from 'axios';
import { addTask, deleteTask, loadTasks } from './actionCreators';

jest.mock('axios');

describe('Given loadTasks function, ', () => {
  test('when resolved, then return LOAD_TASK', async () => {
    const dispatch = jest.fn();
    const data = [{ name: 'buy milk' }];
    axios.mockResolvedValue(data);
    await loadTasks()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({ type: 'LOAD_TASKS' });
  });

  test('when rejected, then return ERROR_TASK', async () => {
    const dispatch = jest.fn();
    axios.mockRejectedValue('error');
    await loadTasks()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({ type: 'ERROR_TASK' });
  });
});

describe('Given addTask function, ', () => {
  test('when resolved, then return ADD_TASK', async () => {
    const dispatch = jest.fn();
    const data = { name: 'buy milk' };
    axios.post.mockResolvedValue(data);
    await addTask()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({ type: 'ADD_TASK' });
  });

  test('when rejected, then return ERROR_TASK', async () => {
    const dispatch = jest.fn();
    axios.post.mockRejectedValue('error');
    await addTask()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({ type: 'ERROR_TASK' });
  });
});

describe('Given deleteTask function, ', () => {
  test('when resolved, then return DELETE_TASK', async () => {
    const dispatch = jest.fn();
    const taskId = 1;
    axios.delete.mockResolvedValue(taskId);
    await deleteTask()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({ type: 'DELETE_TASK' });
  });

  test('when rejected, then return ERROR_TASK', async () => {
    const dispatch = jest.fn();
    axios.delete.mockRejectedValue('error');
    await deleteTask()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({ type: 'ERROR_TASK' });
  });
});
