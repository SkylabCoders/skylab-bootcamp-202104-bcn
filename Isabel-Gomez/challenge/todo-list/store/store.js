let dataBase = [];

const reducer = ({ type, data }) => {
  switch (type) {
    case 'ADD_TASK':
      dataBase.push({ data });
      printNewTask(dataBase);
      break;
    case 'DELETE_TASK':
      const newDataBase = dataBase.filter((element) => element.data.id !== Number(data));
      dataBase = newDataBase;
      dataBase.length === 0 && (indexDataBase = 0);
      deleteSelectTask(data);
      break;
    case 'FINISH_TASK':
      const getCompletedTask = dataBase.completed = true;
      finishSelectTask(data);
      break;
    case 'EDIT_TASK':
      editSelectTask(data);
      break;
    default:
      break;
  }
};
