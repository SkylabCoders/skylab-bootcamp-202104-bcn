const tasks = []; // megaobjeto

const reducer = ({ type, payload }) => {
  switch (type) {
    case 'ADD_TASK':
      tasks.push(payload);
      addNewTask(tasks);
      break;
    case 'DELETE_TASK':
      break;
    default:
      break;
  }
};
