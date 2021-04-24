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

const reducer = ({ type, data }) => {
  switch (type) {
    case 'ADD_TASK':
      arrayTask.push({ type, data });
      printNewTask(arrayTask);
      break;
    case 'DELETE_TASK':
      deleteSelectTask(arrayTask);
      break;
    default:
      break;
  }
};
