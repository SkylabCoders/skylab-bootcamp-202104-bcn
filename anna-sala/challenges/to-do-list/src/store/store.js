let tasks = [];
let lastID = 1;

const CREATE_TASK = 'CREATE_TASK';
const UPDATE_TASK = 'UPDATE_TASK';
const DELETE_TASK = 'DELETE_TASK';

function reducer({ type, data }) {
  switch (type) {
    case CREATE_TASK:
      tasks.push(data);
      printNewTask(data);
      lastID++;
      break;
    case DELETE_TASK:
      const newArray = tasks.filter((obj) => obj.id !== data);
      tasks = newArray;
      deleteItem(data);
      break;
    case UPDATE_TASK:
      crossTaskText(data);
    default:
      return data;
  }
}
