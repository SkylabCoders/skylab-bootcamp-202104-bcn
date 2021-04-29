const dispatcher = ({ data, type }) => {
  switch (type) {
    case 'CREATE_TASK':
      tasksReducer(data, type);
      break;
    case 'DELETE_TASK':
      tasksReducer(data, type);
      break;
    case 'LOAD_TASKS':
      tasksReducer(data, type);
      break;
    case 'UPDATE_TASK':
      tasksReducer(data, type);
      break;
    case 'ERROR':
      generalReducer(data, type);
      break;
    default:

      break;
  }
};
