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

const createTask = (taskData) => new Promise((resolve, reject) => {
  const { title } = taskData;
  const { description } = taskData;
  if (LA_PROGRAMACION_MOLA === true) {
    setTimeout(() => {
      resolve({ type: CREATE_TASK, taskData: { title, description, id: null } });
    }, 2000);
  } else {
    reject({
      type: 'ERROR',
      message: 'La programación no mola',
    });
  }
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

test('Given a createTask action creator, expecting to get a fullfilled promise', () => {
  LA_PROGRAMACION_MOLA = true;

  createTask({
    title: 'taskTitle',
    description: 'taskDescription',
  }).then((result) => {
    expect(result).resolves.toEqual({
      type: 'CREATE_TASK',
      taskData: { title: 'taskTitle', description: 'taskDescription' },
    });
  });
});

test('Given a createTask action creator, expecting to get a rejected promise', () => {
  LA_PROGRAMACION_MOLA = false;

  createTask({
    title: 'taskTitle',
    description: 'taskDescription',
  }).then((result) => {
    expect(result).rejects.toEqual({
      type: 'ERROR',
      message: 'la programacion no mola',
    });
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
