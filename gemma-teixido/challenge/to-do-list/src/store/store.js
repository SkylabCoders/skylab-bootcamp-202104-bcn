const tasks = []; // megaobjeto

const reducer = ({ type, payload }) => {
  switch (type) {
    case 'ADD_TASK':
      tasks.push(payload);
      updateList(tasks);
      break;
    default:
      break;
  }
};
