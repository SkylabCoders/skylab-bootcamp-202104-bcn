let tasks = {
  payload: [{ description: 'Vamos a la playa' }]
};
const myReducer = ({ type, data }) => {
  const newTasks = { ...tasks };
  switch (type) {
    case 'ADD_TASK':
      tasks.payload.push(data);
      break;
    default:
      break;
  }
  updateDom(newTasks);
};

const updateDom = (newTasks) => {
  tasks = newTasks;
  createTask(tasks.payload);
};
