/* eslint-disable class-methods-use-this */
const {
  createTask
//   deleteTaskById,
//   getAllTasks
} = require('./taskController.js')();

const Task = require('../model/taskModel');

jest.mock('../model/taskModel');

describe('createTask', () => {
  class MockTask {
    constructor(name) {
      this.name = name;
    }

    save() {}
  }
  test('Should call json', async () => {
    // arrange
    const req = {
      body: null
    };
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };
    const newTask = new MockTask('task name');
    Task.mockReturnValueOnce(newTask);

    // act
    await createTask(req, res);

    // assert
    expect(res.json).toHaveBeenCalledWith({ name: 'task name' });
  });
});
