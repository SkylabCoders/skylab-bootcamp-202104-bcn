// const actionTypes = require('../actions/actionTypes');
const GET_TASK = 'GET_TASK';
const LOAD_TASKS = 'LOAD_TASKS';
const CREATE_TASK = 'CREATE_TASK';
const DELETE_TASK = 'DELETE_TASK';

// const tasksLoaded = require('./tasks.json');

let appState = {
  tasks: [{ taskId: '1', value: 'TAREA 1' }, { taskId: '2', value: 'TAREA 2' }],
  selectedTask: null,
  tasksNum: 0,
};

function setContent(data) {
  drawTodoList(data);
}

function setEnv(state) {
  appState = state;
  setContent(appState.tasks);
}

function deleteTaskStore(data) {
  const { tasks } = { ...appState };
  const newTasks = tasks.filter(({ taskId }) => taskId !== data);
  return newTasks;
}

function createTaskStore(data) {
  const { tasks } = { ...appState };
  data.taskId = appState.tasksNum + 1;
  const newTasks = [...tasks, data];
  return newTasks;
}

function tasksReducer(data, action) {
  const newState = { ...appState };
  switch (action) {
    case CREATE_TASK:
      newState.tasks = createTaskStore(data);
      newState.tasksNum += 1;
      break;
    case GET_TASK:
      newState.selectedTask = data;
      break;
    case LOAD_TASKS:
      break;
    case DELETE_TASK:
      newState.tasks = deleteTaskStore(data);
      break;
    default:
  }
  console.log(newState);
  return setEnv(newState);
}
