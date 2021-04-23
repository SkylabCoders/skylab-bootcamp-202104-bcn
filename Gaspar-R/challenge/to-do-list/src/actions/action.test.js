const actionTypes = require('./actionTypes');
const { getTask, deleteTask } = require('./action');

test('Given a getTask function creator,', () => {
  const result = getTask();
  expect(result).toEqual({
    type: actionTypes.GET_TASK
  });
});

test('Given a deleteTask function creator,', () => {
  const result = deleteTask(1);
  expect(result).toEqual({
    type: actionTypes.DELETE_TASK,
    taskId: 1
  });
});
