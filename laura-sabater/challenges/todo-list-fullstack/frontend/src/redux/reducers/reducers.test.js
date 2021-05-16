import tasksReducer from './tasksReducer';
import actionTypes from '../actions/actionTypes';

describe('Given tasksReducer function ', () => {
  test('sholud handle LOAD_TASKS', () => {
    expect(tasksReducer([], { type: actionTypes.LOAD_TASKS, tasks: [{ name: 'Buy milk' }] }))
      .toEqual([{ name: 'Buy milk' }]);
  });

  test('sholud handle ADD_TASK', () => {
    expect(tasksReducer([], { type: actionTypes.ADD_TASK, task: { name: 'Buy milk' } }))
      .toEqual([{ name: 'Buy milk' }]);
  });

  test('sholud handle DELETE_TASK', () => {
    expect(tasksReducer([], { type: actionTypes.DELETE_TASK, taskId: 3 }))
      .toEqual([]);
  });
});
