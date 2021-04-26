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

describe('Guiven an addTask function', () => {
  test('then return resolved', () => {
    const myPromise = addTask();
    const result = myPromise.then((data) => exepect(data).resolve.toEqual({ type: 'ADD_TASK', data: { task, id: state.lastId + 1 } }));
  });
});
