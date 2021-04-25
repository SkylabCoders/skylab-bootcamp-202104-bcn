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
      finishSelectTask(data);
      break;
    default:
      break;
  }
};
