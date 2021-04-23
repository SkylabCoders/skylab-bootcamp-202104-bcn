// const actionTypes = require('./actionTypes');
// const { getTasks, deleteTask } = require('./actions');
import { GET_TASKS, DELETE_TASK } from './actionTypes';
import { getTasks, deleteTask } from './actions';

test('Given a getTasks action creator', () => {
  const result = getTasks();
  expect(result).toEqual({
    type: GET_TASKS,
  });
});

test('Given a deleteTask action creator', () => {
  const result = deleteTask(1);
  expect(result).toEqual({
    type: DELETE_TASK,
    taskId: 1,
  });
});
