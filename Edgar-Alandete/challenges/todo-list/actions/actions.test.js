const GET_TASK = 'GET_TASK';
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

describe('Given a createTask function creator', () => {
  const scenarios = [
    {
      task: 2,
      result: { type: DELETE_TASK, data: 2 },
    },
  ];

  scenarios.forEach((scenario) => {
    describe(`When invoked with values task: ${scenario.task}`, () => {
      test(`Then return ${scenario.result}`, () => {
        const taskToCreate = scenario.task;
        const resultScenario = scenario.result;
        // Act
        const result = deleteTask(taskToCreate);
        // Assert
        expect(resultScenario).toEqual(result);
      });
    });
  });
});
