const tasks = []; // megaobjeto

const reducer = ({ type, payload }) => {
  switch (type) {
    case 'ADD_TASK':
      tasks.push(payload);
      addNewTask(tasks);
      break;
    case 'DELETE_TASK':
      const indexDelete = tasks.indexOf(payload);
      const newTaskDelete = tasks.splice(indexDelete, 1);
      deleteTask(tasks);
      break;
    case 'DONE_TASK':
      console.log('ID ->', payload);
      doneTask(payload);
      break;
    default:
      break;
  }
};
