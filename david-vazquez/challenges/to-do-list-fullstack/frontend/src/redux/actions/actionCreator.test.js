import axios from 'axios';
import {
  addTask, loadTasks, deleteTask, doneTask,
} from './actionCreator';
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
    axios.post.mockResolvedValue({ data: ['hola'] });
    const dispatch = jest.fn();
    await addTask()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.ADD_TASK,
      newTask: ['hola'],
    });
  });
  test('should LOAD_TASK_ERROR', async () => {
    axios.post.mockRejectedValue();
    const dispatch = jest.fn();
    await addTask()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.ADD_TASKS_ERROR,
    });
  });
});

describe('deleteTask', () => {
  test('should DELETE_TASK', async () => {
    axios.delete.mockResolvedValue(10);
    const dispatch = jest.fn();
    await deleteTask(10)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.DELETE_TASK,
      task: 10,
    });
  });
  test('should DELETE_TASK_ERROR', async () => {
    axios.delete.mockRejectedValue();
    const dispatch = jest.fn();
    await deleteTask()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.DELETE_TASKS_ERROR,
    });
  });
});

describe('doneTask', () => {
  test('should DONE_TASK', async () => {
    axios.put.mockRejectedValue();
    const dispatch = jest.fn();
    await doneTask()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.DONE_TASKS_ERROR,
    });
  });
  test('should DONE_TASK_ERROR', async () => {
    const task = { data: { text: 'Hola', state: false } };
    axios.put.mockResolvedValue(task);
    const dispatch = jest.fn();
    await doneTask(task)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.DONE_TASK,
      updateTask: task.data,
    });
  });
});
