// const { addNewTask, deleteTask, modifyTask } = require('../dispatcher/dispatcher');

const store = [
  {
    id: 1,
    title: 'first todo',
    description: 'pick up milk',
    complete: true,
    canceled: true,
    date: 1389878466730,
  },
  {
    id: 2,
    title: 'second todo',
    description: 'learn flux',
    complete: false,
    canceled: false,
    date: 1389988926901,
  },
  {
    id: 3,
    title: 'third todo',
    description: 'go for a run',
    complete: false,
    canceled: false,
    date: 1389992494240,
  },
];

const arrayTask = [];

const reducerToAdd = ({ type, data }) => {
  console.log('pepa');
  switch (type) {
    case 'ADD_TASK':
      console.log('hijo de pepa');
      arrayTask.push(data);
      printNewTask(arrayTask);
      break;
    default:
      break;
  }
};

// const reducerToDelete = () => {

// };

// const reducerToModify = () => {

// };

// module.exports = {
//   store, reducerToAdd, reducerToDelete, reducerToModify,
// };
