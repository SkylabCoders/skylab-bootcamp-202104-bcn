import axios from axios;
import {loadTasks} from './actionCreators'
import actionTypes from './actionTypes'

jest.mock('axios');

describe('when invoked a loadTasks func', () => {
    test('should return and async func', async () => {
        axios.mockResolvedValue();
        const dispatch = jest.fn();
        await loadTasks()(dispatch);
        expect(dispatch).toHaveBeenCalled();
    })
})
/* eslint-disable no-console */
import axios from 'axios';
import {
  loadTasks,
  addTask,
  deleteTask,
  getTaskById,
  updateTask,
} from './actionCreators';

jest.mock('axios');

const dispatch = jest.fn();
global.console = { log: jest.fn() };

describe('Given a loadTasks function', () => {
  test('should call dispatch with a task list', async () => {
    axios.get.mockResolvedValueOnce({ data: [{}] });
    await loadTasks()(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});

describe('Given a addTask function', () => {
  test('should call dispatch with a task list', async () => {
    axios.post.mockResolvedValueOnce({ data: {} });
    await addTask()(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});

describe('Given a deleteTask function', () => {
  test('should call dispatch with a task id', async () => {
    axios.delete.mockResolvedValueOnce({ data: {} });
    await deleteTask(10)(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
  test('when it catches an erorr should call console.log with an error', async () => {
    axios.delete.mockRejectedValue('error');
    await deleteTask(10)(dispatch);
    expect(console.log).toHaveBeenCalledWith('error');
  });
  describe('Given a getTaskById function', () => {
    test('should call dispatch with a task id', async () => {
      axios.get.mockResolvedValueOnce({ data: {} });
      await getTaskById(10)(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
  describe('Given a updateTask function', () => {
    test('should call dispatch with a task id', async () => {
      axios.put.mockResolvedValueOnce({ data: {} });
      await updateTask({
        title: 'title',
        description: 'description',
        done: true,
      })(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});