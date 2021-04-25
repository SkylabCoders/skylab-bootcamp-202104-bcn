const tasks = [];

const CREATE_TASK = 'CREATE_TASK';
const UPDATE_TASK = 'UPDATE_TASK';
const DELETE_TASK = 'DELETE_TASK';
const PRINT_TASKS = 'PRINT_TASKS';

function reducer({ type, data }) {
  switch (type) {
    case type = CREATE_TASK:
      tasks.push(data);
      console.log('estamos in!!');
      printNewTask(data);
      break;
    default:
      return data;
  }
}
