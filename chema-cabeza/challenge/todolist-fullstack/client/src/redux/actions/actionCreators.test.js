import axios from 'axios';
import {
  loadList, deleteTask, addtask, updateTask,
} from './actionCreators';
import actionTypes from './actionTypes';

jest.mock('axios');

describe('loadList', () => {
  test('should dispatch LOAD_LIST', async () => {
    axios.mockResolvedValue({ data: ['pepe'] });
    const dispatch = jest.fn();

    await loadList()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_LIST,
      list: ['pepe'],
    });
  });

  test('should dispatch LOAD_LIST_ERROR', async () => {
    axios.mockRejectedValue();
    const dispatch = jest.fn();

    await loadList()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'LOAD_LIST_ERROR',
    });
  });
});

describe('deleteTask', () => {
  test('should dispatch LOAD_LIST', async () => {
    axios.delete.mockResolvedValue({ data: ['pepe'] });
    const dispatch = jest.fn();

    await deleteTask(2)(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.DELETE_TASK,
      taskId: 2,
    });
  });

  test('should dispatch DELETE_TASK_ERROR', async () => {
    axios.delete.mockRejectedValue();
    const dispatch = jest.fn();

    await deleteTask(23)(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'DELETE_TASK_ERROR',
    });
  });
});

describe('addtask', () => {
  test('should dispatch ADD_TASK', async () => {
    axios.post.mockResolvedValue({ data: ['pepe'] });
    const dispatch = jest.fn();

    await addtask({ id: 1, name: 'Tarea' })(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.ADD_TASK,
      task: ['pepe'],
    });
  });

  test('should dispatch ADD_TASK_ERROR', async () => {
    axios.post.mockRejectedValue();
    const dispatch = jest.fn();

    await addtask()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'ADD_TASK_ERROR',
    });
  });
});

describe('updateTask', () => {
  test('should dispatch UPDATE_TASK', async () => {
    axios.put.mockResolvedValue({ data: ['pepe'] });
    const dispatch = jest.fn();

    await updateTask({ id: 1, name: 'Tarea' })(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.UPDATE_TASK,
      task: ['pepe'],
    });
  });

  test('should dispatch ADD_TASK_ERROR', async () => {
    axios.put.mockRejectedValue();
    const dispatch = jest.fn();

    await updateTask()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'UPDATE_TASK_ERROR',
    });
  });
});
