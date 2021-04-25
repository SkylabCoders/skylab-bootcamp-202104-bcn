const addTask = (task) => {
  const myPromise = new Promise((resolve, reject) => {
    const index = state.toDoList.find((element) => element.task === task);
    if (index) {
      reject('Task is already listed');
    } else {
      resolve(
        {
          type: 'ADD_TASK',
          data: {
            task,
            id: state.lastId + 1,
          },
        },
      );
    }
  });
  myPromise.then((data) => reducer(data)).catch((error) => alert(error));
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
