/* eslint-disable no-console */
import axios from 'axios';
import { loadTasks, addTask, deleteTask } from './actionCreators';

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
  test('when it catches an erorr should call console.log', async () => {
    axios.delete.mockRejectedValue('error');
    await deleteTask(10)(dispatch);
    expect(console.log).toHaveBeenCalledWith('error');
  });
});
