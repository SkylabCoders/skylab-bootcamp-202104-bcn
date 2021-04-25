const tasks = [];

const reducer = ({ type, data }) => {
  switch (type) {
    case 'ADD_TASK':
      tasks.push({ id: data.id, name: data.name });
      printTasks(tasks);
      break;
    case 'DELETE_TASK':
      console.log(data);
      break;
    default:
      break;
  }
};
