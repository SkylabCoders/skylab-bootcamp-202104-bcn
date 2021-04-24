const GET_TASKS = 'GET_TASKS';
const DELETE_TASK = 'DELETE_TASK';
const CREATE_TASK = 'CREATE_TASK';
const MODIFY_TASK = 'MODIFY_TASK';
const TOOGLE_TASK_STATE = 'TOOGLE_TASK_STATE';

const getTasks = () => ({
  type: GET_TASKS,
});

const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  taskId,
});

const createTask = (taskData) => ({
  type: CREATE_TASK,
  taskData,
});

const modifyTask = (taskData) => ({
  type: MODIFY_TASK,
  taskData,
});

const tootleTaskState = (taskId) => ({
  type: TOOGLE_TASK_STATE,
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

test('Given a createTask action creator', () => {
  const result = createTask({
    title: 'taskTitle',
    description: 'taskDescription',
  });
  expect(result).toEqual({
    type: 'CREATE_TASK',
    taskData: { title: 'taskTitle', description: 'taskDescription' },
  });
});

test('Given a modifyTask action creator', () => {
  const result = modifyTask({
    title: 'taskTitle',
    description: 'taskDescription',
    id: 1,
  });
  expect(result).toEqual({
    type: 'MODIFY_TASK',
    taskData: { title: 'taskTitle', description: 'taskDescription', id: 1 },
  });
});

test('Given a tootleTaskState action creator', () => {
  const result = tootleTaskState(1);
  expect(result).toEqual({
    type: 'TOOGLE_TASK_STATE',
    taskId: 1,
  });
});
