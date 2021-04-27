const addTask = (task) => {
  if (!task) return;
  const myPromise = new Promise((resolve, reject) => {
    const index = state.toDoList.find((element) => element.task.toUpperCase() === task.toUpperCase());
    setTimeout(() => {
      if (index) {
        task = task.toUpperCase();
        reject(`"${task}" is already listed`);
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
    }, 600);
  });
  myPromise.then((data) => reducer(data)).catch((error) => alert(error));
};

const removeTask = (id) => reducer({
  type: 'REMOVE_TASK',
  data: id,
});

const handleEdit = (id) => reducer({
  type: 'OPEN_EDIT_FRAME',
  data: id,
});

const confirmEdit = (task, id) => reducer({
  type: 'CONFIRM_EDIT',
  data: {
    task,
    id,
  },
});
