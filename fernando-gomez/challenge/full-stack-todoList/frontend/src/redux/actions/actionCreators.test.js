import axios from 'axios';
import {
  loadTasks,
  addTask,
  deleteTask,
  updateTask
} from './actionCreators';
import actionTypes from './actionTypes';

jest.mock('axios');

describe('loadTasks', () => {
  test('should dispatch LOAD_TASKS', async () => {
    const loadTasksResponse = loadTasks();
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn()
    });
    const dispatch = jest.fn();
    await loadTasksResponse(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.TASK_ERROR
    });
  });
});

describe('loadTasks from Axios', () => {
  test('should dispatch LOAD_TASKS', async () => {
    axios.mockResolvedValue({ data: ['Skylab'] });
    const dispatch = jest.fn();
    // act
    await loadTasks()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_TASKS,
      tasks: ['Skylab']
    });
  });
});

describe('addTasks from Axios', () => {
  test('should dispatch ADD_TASK', async () => {
    const data = { data: ['Skylab'] };

    axios.mockRejectedValue(data);
    const mockedTask = {};
    const dispatch = jest.fn();
    // act
    await addTask(mockedTask)(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.ADD_TASK,
      tasks: mockedTask
    });
  });
});

describe('deleteTask from Axios', () => {
  test('should dispatch DELETE_TASK', async () => {
    const data = { data: ['Skylab'] };

    axios.mockRejectedValue(data);
    const mockedTask = {};
    const dispatch = jest.fn();
    // act
    await deleteTask(mockedTask)(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.DELETE_TASK,
      tasks: mockedTask
    });
  });
});

describe('updateTask from Axios', () => {
  test('should dispatch UPDATE_TASK', async () => {
    const data = { data: ['Skylab'] };

    axios.mockRejectedValue(data);
    const mockedTask = {};
    const dispatch = jest.fn();
    // act
    await updateTask(mockedTask)(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.UPDATE_TASK,
      tasks: mockedTask
    });
  });
});
