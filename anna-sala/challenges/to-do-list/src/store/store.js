const tasks = [];
const lastID = 0;

const CREATE_TASK = 'CREATE_TASK';
const UPDATE_TASK = 'UPDATE_TASK';
const DELETE_TASK = 'DELETE_TASK';

function reducer({ type, data }) {
  switch (type) {
    case CREATE_TASK:
      tasks.push(data);
      printNewTask(data);
      break;
    case DELETE_TASK:
      break;
    default:
      return data;
  }
}
