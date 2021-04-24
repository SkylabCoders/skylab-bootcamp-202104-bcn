const actions = [{ type: 'ADD_TASK', data: '' },
  // { type: 'DELETE_TASK', data },
  // { type: 'MODIFY_TASK', data },
];

// module.exports = ACTIONS;

const toCreateTask = () => {
  console.log('pepe');
  const dataNewTask = document.querySelector('.inputNewTask');
  addValueToNewTask(dataNewTask.value);
};
