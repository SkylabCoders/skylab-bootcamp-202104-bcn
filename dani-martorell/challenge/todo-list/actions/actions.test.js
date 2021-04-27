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
  return myPromise.then((data) => reducer(data)).catch((error) => alert(error));
};

describe('Given an addTask function', () => {
  test('then return resolved', () => addTask().then((data) => {
    expect(data).toEqual({ type: 'ADD_TASK', data: { task, id: state.lastId + 1 } });
  }));
});
