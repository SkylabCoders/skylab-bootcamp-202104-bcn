const handleCreateTask = () => {
  const taskToCreate = { taskId: '', value: 'Task to test', isFinished: false };

  const taskPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (taskToCreate.value) {
        resolve(
          { type: 'CREATE_TASK', data: { taskId: '', value: 'Task for the test', isFinished: false } },
        );
      } else {
        reject({ type: 'ERROR', data: 'NO SE PUEDE CREAR LA TAREA' });
      }
    }, 3000);
  });
  return taskPromise;
};

describe('Given a handleCreateTask function', () => {
  test('Then return RESOLVED', () => {
    const promise = handleCreateTask();
    // Act
    const result = promise.then((data) => expect(data).resolve.toEqual({ type: 'CREATE_TASK', data: { taskId: '', value: 'Task for the test', isFinished: false } }));
  });
});

describe('Given a handleCreateTask function', () => {
  test('Then return REJECTED', () => {
    const promise = handleCreateTask();
    // Act
    const result = promise.then((data) => expect(data).reject.toEqual({ type: 'ERROR', data: 'NO SE PUEDE CREAR LA TAREA' }));
  });
});
