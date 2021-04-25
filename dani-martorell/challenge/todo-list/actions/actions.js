const addTask = (task) => {
  const myPromise = Promise.resolve(
    {
      type: 'ADD_TASK',
      data: {
        task,
        id: state.lastId + 1,
      },
    },
  );
  myPromise.then((data) => reducer(data));
  // return reducer(myPromise);
};

const removeTask = (id) => reducer({
  type: 'REMOVE_TASK',
  data: id,
});

const handleEdit = (htmlElement) => reducer({
  type: 'OPEN_EDIT_FRAME',
  data: htmlElement,
});

const confirmEdit = (task, id) => reducer({
  type: 'CONFIRM_EDIT',
  data: {
    task,
    id,
  },
});

/*
{
    type: 'ADD_TASK',
    data: {
      task,
      id: state.lastId + 1,
    },
  }
*/
