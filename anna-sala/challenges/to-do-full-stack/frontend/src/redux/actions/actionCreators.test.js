import axios from 'axios';

import {
  loadTasks, addTask, deleteTask, updateTask,
} from './actionCreators';

jest.mock('axios');
jest.mock('./actionTypes');

describe('Given a loadTasks actionCreator', () => {
  describe('When invoked', () => {
    test('Then it should return tasks', async () => {
      axios.mockResolvedValueOnce({ data: 'ANNA' });
      const dispatch = jest.fn();
      await loadTasks()(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
  test('Then it should return error', async () => {
    axios.mockRejectedValue('error');
    const dispatch = jest.fn();
    await loadTasks()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: 'LOAD_TASK_ERROR',
    });
  });
});

describe('Given a addTask actionCreator', () => {
  describe('When invoked', () => {
    test('Then it should return the new task', async () => {
      axios.post.mockResolvedValueOnce({ data: 'ANNA' });
      const dispatch = jest.fn();
      await addTask()(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: 'ADD_TASK',
        task: 'ANNA',
      });
    });
    test('Then it should return error', async () => {
      axios.post.mockRejectedValue('error');
      const dispatch = jest.fn();
      await addTask()(dispatch);
      expect(dispatch).toHaveBeenCalledWith({
        type: 'LOAD_TASK_ERROR',
      });
    });
  });
});

describe('Given a deleteTask actionCreator', () => {
  describe('When invoked', () => {
    test('Then it should dispatch the task', async () => {
      axios.delete.mockResolvedValueOnce({ data: 'Fernando' });
      const dispatch = jest.fn();
      await deleteTask({ _id: 3 })(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: 'DELETE_TASK',
        task: { _id: 3 },
      });
    });
    test('Then it should return error', async () => {
      axios.post.mockRejectedValue('error');
      const dispatch = jest.fn();
      await deleteTask()(dispatch);
      expect(dispatch).toHaveBeenCalledWith({
        type: 'LOAD_TASK_ERROR',
      });
    });
  });
});

describe('Given a updateTask actionCreator', () => {
  describe('When invoked', () => {
    test('Then dispatch the updated task', async () => {
      axios.put.mockResolvedValueOnce({ data: 'ANNA' });
      const dispatch = jest.fn();
      await updateTask({ _id: 3 })(dispatch);
      expect(dispatch).toHaveBeenCalledWith({
        type: 'UPDATE_TASK',
        task: 'ANNA',
      });
    });
  });
  test('Then it should return error', async () => {
    axios.put.mockRejectedValue('error');
    const dispatch = jest.fn();
    await updateTask()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: 'LOAD_TASK_ERROR',
    });
  });
});
