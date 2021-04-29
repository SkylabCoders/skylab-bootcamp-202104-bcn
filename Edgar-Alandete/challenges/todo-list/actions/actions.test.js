const LOAD_TASKS = 'LOAD_TASKS';
const CREATE_TASK = 'CREATE_TASK';
const DELETE_TASK = 'DELETE_TASK';
const UPDATE_TASK = 'UPDATE_TASK';
const ERROR = 'ERROR';

const createTask = (taskToCreate) => {
  const payload = { type: 'CREATE_TASK', data: taskToCreate };
  return payload;
};

const deleteTask = (taskId) => {
  const payload = { type: DELETE_TASK, data: taskId };
  return payload;
};

const updateTask = (taskId) => {
  const payload = {
    type: UPDATE_TASK,
    data: taskId,
  };
  return payload;
};

const loadTasks = () => {
  const payload = {
    type: LOAD_TASKS,
  };

  return payload;
};

const createError = () => {
  const payload = { type: ERROR, data: 'NO SE PUEDE CREAR LA TAREA' };
  return payload;
};

describe('Given a createTask function creator', () => {
  const scenarios = [
    {
      task: { taskId: '', value: 'Task for the test', isFinished: false },
      result: { type: CREATE_TASK, data: { taskId: '', value: 'Task for the test', isFinished: false } },
    },
  ];

  scenarios.forEach((scenario) => {
    describe(`When invoked with values task: ${scenario.task}`, () => {
      test(`Then return ${scenario.result}`, () => {
        const taskToCreate = scenario.task;
        const resultScenario = scenario.result;
        // Act
        const result = createTask(taskToCreate);
        // Assert
        expect(resultScenario).toEqual(result);
      });
    });
  });
});

describe('Given a deleteTask function creator', () => {
  const scenarios = [
    {
      task: 2,
      result: { type: DELETE_TASK, data: 2 },
    },
  ];

  scenarios.forEach((scenario) => {
    describe(`When invoked with values task: ${scenario.task}`, () => {
      test(`Then return ${scenario.result}`, () => {
        const taskToDelete = scenario.task;
        const resultScenario = scenario.result;
        // Act
        const result = deleteTask(taskToDelete);
        // Assert
        expect(resultScenario).toEqual(result);
      });
    });
  });
});

describe('Given a updateTask function creator', () => {
  const scenarios = [
    {
      task: 2,
      result: { type: UPDATE_TASK, data: 2 },
    },
  ];

  scenarios.forEach((scenario) => {
    describe(`When invoked with values task: ${scenario.task}`, () => {
      test(`Then return ${scenario.result}`, () => {
        const taskToUpdate = scenario.task;
        const resultScenario = scenario.result;
        // Act
        const result = updateTask(taskToUpdate);
        // Assert
        expect(resultScenario).toEqual(result);
      });
    });
  });
});

describe('Given a loadTasks function creator', () => {
  const scenarios = [
    {
      result: { type: LOAD_TASKS },
    },
  ];

  scenarios.forEach((scenario) => {
    describe(`When invoked with values task: ${scenario.task}`, () => {
      test(`Then return ${scenario.result}`, () => {
        const resultScenario = scenario.result;
        // Act
        const result = loadTasks();
        // Assert
        expect(resultScenario).toEqual(result);
      });
    });
  });
});

describe('Given a createError function creator', () => {
  const scenarios = [
    {
      result: { type: ERROR, data: 'NO SE PUEDE CREAR LA TAREA' },
    },
  ];

  scenarios.forEach((scenario) => {
    describe(`When invoked with values task: ${scenario.task}`, () => {
      test(`Then return ${scenario.result}`, () => {
        const resultScenario = scenario.result;
        // Act
        const result = createError();
        // Assert
        expect(resultScenario).toEqual(result);
      });
    });
  });
});
