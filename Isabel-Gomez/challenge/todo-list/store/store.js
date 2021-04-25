let dataBase = [];

const reducer = ({ type, data }) => {
  switch (type) {
    case 'ADD_TASK':
      dataBase.push({ data });
      console.log('dataBase create', dataBase);
      printNewTask(dataBase);
      break;
    case 'DELETE_TASK':
      console.log('id en data Delete', data);
      const newDataBase = dataBase.filter((element) => element.data.id !== Number(data));
      console.log('newDataBase con filter', newDataBase);
      dataBase = newDataBase;
      dataBase.length === 0 && (indexDataBase = 0);
      deleteSelectTask(data);
      break;
    case 'FINISH_TASK':
      console.log('id en data Finish', data);
      const getCompletedTask = dataBase.completed = true;
      console.log('dataBase con Finish', dataBase);
      finishSelectTask(data);
      break;
    case 'EDIT_TASK':
      console.log('id en data Edit', data);
      console.log('dataBase con Edit', dataBase);
      editSelectTask(data);
      break;
    default:
      break;
  }
};
