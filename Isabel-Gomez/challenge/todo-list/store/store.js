const dataBase = [];

const reducer = ({ type, data }) => {
  switch (type) {
    case 'ADD_TASK':
      dataBase.push({ type, data });
      printNewTask(dataBase);
      break;
    case 'DELETE_TASK':
      console.log('id en data', data);
      deleteSelectTask(data);
      break;
    case 'FINISH_TASK':
      console.log('id en data', data);
      finishSelectTask(data);
      break;
    default:
      break;
  }
};
