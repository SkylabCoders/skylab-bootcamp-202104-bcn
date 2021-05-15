// import actionTypes from './actionTypes';
import axios from 'axios';
import { deleteTask, loadTasks } from './actionCreator';

jest.mock('axios');

describe('deleteTask', () => {
  test('Should return DELETE_TASK', async () => {
    // arrange
    const dispatch = jest.fn();
    axios.delete.mockResolvedValue(1);

    // act
    await deleteTask(1)(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith({
      type: 'DELETE_TASK',
      taskId: 1
    });
  });
});

describe('loadTasks', () => {
  test('Should dispatch ERROR_TASK', async () => {
    // arrange
    const loadTasksRes = loadTasks();
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn()
    });
    const dispatch = jest.fn();

    // act
    await loadTasksRes(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith({
      type: 'ERROR_TASK'
    });
  });
});
