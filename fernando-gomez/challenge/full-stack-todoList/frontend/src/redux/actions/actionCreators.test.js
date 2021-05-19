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
    const mockedTask = { data: ['Skylab'] };
    const dispatch = jest.fn();
    axios.post.mockResolvedValue(mockedTask);
    // act
    await addTask(mockedTask)(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.ADD_TASK,
      task: ['Skylab']
    });
  });
});

describe('delete a task from Axios', () => {
  test('should dispatch DELETE_TASK', async () => {
    const dispatch = jest.fn();
    axios.delete.mockResolvedValue(3);
    // act
    await deleteTask(3)(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.DELETE_TASK,
      taskId: 3
    });
  });
});

describe('update a task from Axios', () => {
  test('should dispatch UPDATE_TASK', async () => {
    const dispatch = jest.fn();
    axios.put.mockResolvedValue(3);

    // act
    await updateTask(3)(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.UPDATE_TASK
    });
  });
});
