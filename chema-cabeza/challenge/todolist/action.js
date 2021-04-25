const addTodo = (data) => new Promise((resolve, reject) => {
  const dataInput = document.querySelector('.newtask-input');

  if (dataInput.value) {
    setTimeout(() => {
      resolve(store.dispatch({
        type: 'ADD_TASK', id: findFreeId(store.tasks), title: dataInput.value, done: false,

      }));
      dataInput.value = '';
    }, 1000);
  } else {
    reject({
      type: 'ERROR404',
      message: 'Input value of null',
    });
  }
});

const editTodo = (ID, editedText) => {
  store.dispatch({ type: 'EDIT_TASK', id: ID, editable: editedText });
};

const deleteTodo = (ID) => {
  store.dispatch({ type: 'DELETE_TASK', id: ID });
};

const doneTodo = (ID) => {
  store.dispatch({ type: 'DONE_TASK', id: ID });
};
