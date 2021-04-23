const actionTypes = require('./actionTypes');
const { getTask } = require('./actions');

test('Given a getTask function creator', () => {
  const result = getTask();
  expect(actionTypes.GET_TASK).toBe(result.type);
});
