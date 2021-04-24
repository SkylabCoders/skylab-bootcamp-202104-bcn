const task = [];
const myReducer = ({ type, data }) => {
  switch (type) {
    case 'ADD_TASK':
      task.push(data);
      chopped(task);
      break;
    default:
      return type;
  }
};
