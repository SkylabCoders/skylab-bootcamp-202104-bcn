let tasks = {
  payload: [],
};

const myReducer = ({ type, data }) => {
  const newTasks = { ...tasks };
  switch (type) {
    case 'ADD_TASK':
      tasks.payload.push(data);
      break;
    case 'DELETE_TASK':
      const delItem = newTasks.payload.findIndex((element) => element.id === data.id);
      newTasks.payload.splice(delItem, 1);
      break;
    case 'EDIT_TASK':
      const doneTask = newTasks.payload.findIndex((element) => element.id === data.id);
      newTasks.payload[doneTask].complete = true;
      break;
    default:
      break;
  }
  updateDom(newTasks);
};

const updateDom = (newTasks) => {
  tasks = newTasks;
  updateList(tasks.payload);
};
