import axios from 'axios';
import {
  addTask,
  loadTasks,
  deleteTask,
  updateTask,
  markAsDone,
} from './actionCreators';
import actionTypes from './actionTypes';

jest.mock('axios');
jest.mock('./actionTypes');

describe('loadTasks', () => {
  test('should return all tasks', async () => {
    axios.mockResolvedValue({ data: { id: 1, name: 'buy milk' } });
    const dispatch = jest.fn();
    await loadTasks()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_TASKS,
      tasks: { id: 1, name: 'buy milk' },
    });
  });

  test('should dispatch a Load task Error', async () => {
    axios.mockRejectedValue();
    const dispatch = jest.fn();
    await loadTasks()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({ type: actionTypes.LOAD_TASKS_ERROR });
  });
});

describe('addTask', () => {
  test('Should return a new task', async () => {
    axios.post.mockResolvedValue({ data: { id: 1, name: 'buy milk' } });
    const dispatch = jest.fn();
    await addTask()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.ADD_TASK,
      task: { id: 1, name: 'buy milk' },
    });
  });
  test('Should return an Add Task error', async () => {
    axios.post.mockRejectedValue();
    const dispatch = jest.fn();
    await addTask()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({ type: actionTypes.ADD_TASK_ERROR });
  });
});

describe('deleteTask', () => {
  test('Should return a 200 status', async () => {
    axios.delete.mockResolvedValue({
      status: 200,
      data: { id: 1, name: 'buy milk' },
    });
    const dispatch = jest.fn();
    await deleteTask()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.DELETE_TASK,
      response: {
        data: { id: 1, name: 'buy milk' },
        status: 200,
      },
    });
  });
  test('Should return a Delete Task error', async () => {
    axios.delete.mockRejectedValue();
    const dispatch = jest.fn();
    await deleteTask()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({ type: actionTypes.DELETE_TASK_ERROR });
  });
});

describe('updateTask', () => {
  test('Should return an updated task', async () => {
    axios.put.mockResolvedValue({
      data: { id: 1, name: 'buy milk' },
    });
    const dispatch = jest.fn();
    await updateTask({ id: 1, name: 'buy water' })(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.UPDATE_TASK,
      task: { id: 1, name: 'buy milk' },
    });
  });
  test('Should return an Update Task error', async () => {
    axios.put.mockRejectedValue();
    const dispatch = jest.fn();
    await updateTask()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({ type: actionTypes.UPDATE_TASK_ERROR });
  });
});

describe('markAsDone', () => {
  test('Should return a task with isCompleted:true', async () => {
    axios.put.mockResolvedValue({
      data: { id: 1, name: 'buy milk', isComplited: true },
    });
    const dispatch = jest.fn();
    await markAsDone({ id: 1, name: 'buy milk', isComplited: false })(dispatch);
    expect(dispatch).toHaveBeenCalledWith(
      {
        type: actionTypes.COMPLETE_TASK,
        task: { id: 1, name: 'buy milk', isComplited: true },
      },
    );
  });
  test('Should return a Complete task error', async () => {
    axios.put.mockRejectedValue();
    const dispatch = jest.fn();
    await markAsDone()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({ type: actionTypes.COMPLETE_TASK_ERROR });
  });
});
