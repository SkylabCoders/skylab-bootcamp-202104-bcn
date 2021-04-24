const tasks = []; // megaobjeto

const reducer = ({ type, payload }) => {
  switch (type) {
    case 'ADD_TASK':
      tasks.push(payload);
      updateList(tasks);
      break;
    case 'DELETE_TASK':
      console.log('detele');
      break;
    default:
      break;
  }
};
