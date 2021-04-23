const GET_TASKS = 'GET_TASKS';
const DELETE_TASK = 'DELETE_TASKS';

const getTasks = () => ({
  type: GET_TASKS,
});

const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  taskId,
});

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
