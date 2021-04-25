function findFreeId(tasks) {
  const sortedArray = tasks
    .slice() // Make a copy of the array.
    .sort((a, b) => a.id - b.id); // Sort it.
  let previousId = 0;
  for (const element of sortedArray) {
    if (element.id != (previousId + 1)) {
      // Found a gap.
      return previousId + 1;
    }
    previousId = element.id;
  }
  // Found no gaps.
  return previousId + 1;
}

const addTodo = () => {
  const dataInput = document.querySelector('.newtask-input');
  store.dispatch({
    type: 'ADD_TASK', id: findFreeId(store.tasks), title: dataInput.value, done: false,
  });

  dataInput.value = '';
};

const deleteTodo = (ID) => {
  store.dispatch({ type: 'DELETE_TASK', id: ID });
};

const doneTodo = (ID, done) => {
  store.dispatch({ type: 'DONE_TASK', id: ID });
};
