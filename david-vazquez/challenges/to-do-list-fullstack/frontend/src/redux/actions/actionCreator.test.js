import axios from 'axios';
import { addTask, loadTasks, deleteTask } from './actionCreator';
import actionTypes from './actionTypes';

jest.mock('axios');

describe('loadTasks', () => {
  test('should dispatch LOAD_TASKS', async () => {
    // Arrange
    axios.mockResolvedValue({ type: actionTypes.LOAD_TASKS });
    const dispatch = jest.fn();
    // Act
    await loadTasks()(dispatch);
    // Assert
    expect(dispatch).toHaveBeenCalledWith({ type: actionTypes.LOAD_TASKS });
  });
  test('should dispatch LOAD_TASKS_ERROR', async () => {
    // Arrange
    const loadTasksResponse = loadTasks();
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockRejectedValue(),
    });
    const dispatch = jest.fn();
    // Act
    await loadTasksResponse(dispatch);
    // Assert
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_TASKS_ERROR,
    });
  });
});

describe('addTask', () => {
  test('should ADD_TASK', async () => {
    axios.mockResolvedValue();
    const dispatch = jest.fn();
    await addTask()(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
  test('should LOAD_TASK_ERROR', async () => {
    axios.mockResolvedValue();
    const dispatch = jest.fn();
    await addTask()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_TASKS_ERROR,
    });
  });
});

describe('deleteTask', () => {
  test('should DELETE_TASK', async () => {
    axios.mockResolvedValue();
    const dispatch = jest.fn();
    await deleteTask()(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
  test('should DELETE_TASK_ERROR', async () => {
    axios.mockResolvedValue();
    const dispatch = jest.fn();
    await deleteTask()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_TASKS_ERROR,
    });
  });
});

describe('deleteTask', () => {
  test('should DELETE_TASK', async () => {
    axios.mockResolvedValue();
    const dispatch = jest.fn();
    await deleteTask()(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
  test('should DELETE_TASK_ERROR', async () => {
    axios.mockResolvedValue();
    const dispatch = jest.fn();
    await deleteTask()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_TASKS_ERROR,
    });
  });
});
