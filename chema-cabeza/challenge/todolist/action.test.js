const deleteTodo = (ID) => ({ type: 'DELETE_TASK', id: ID });

const doneTodo = (ID) => ({ type: 'DONE_TASK', id: ID });

const editTodo = (ID, editedText) => ({ type: 'EDIT_TASK', id: ID, editable: editedText });

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

/// //////////////////////////TEST//////////////////////////////////////////

test('Given a addTodo function, expecting a resolved promise', () => {
  const dataInput = document.querySelector('.newtask-input');
  addTodo({
    title: 'ADD_TASK',
    id: 2,
    title: 'string',
    done: false,
  }).then((result) => {
    expect(result).resolves.toEqual({
      title: 'ADD_TASK',
      id: 2,
      title: 'string',
      done: false,
    });
  });
});

test('Given a addTodo function, expecting a rejected promise', () => {
  const dataInput = document.querySelector('.newtask-input');
  addTodo({
    title: 'ADD_TASK',
    id: 2,
    title: 'string',
    done: false,
  }).then((result) => {
    expect(result).rejected.toEqual({
      type: 'ERROR404',
      message: 'Input value of null',
    });
  });
});

test('Given a deleteTodo function creator', () => {
  const result = deleteTodo(2);
  expect(result).toEqual({
    type: 'DELETE_TASK',
    id: 2,
  });
});
test('Given a doneTodo function', () => {
  const result = doneTodo(2);
  expect(result).toEqual({ type: 'DONE_TASK', id: 2 });
});

test('Given a editTodo function', () => {
  const result = editTodo(2);
  expect(result).toEqual({ type: 'EDIT_TASK', id: 2 });
});
