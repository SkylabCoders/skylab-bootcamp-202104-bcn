/* eslint-disable class-methods-use-this */
const {
  createTask,
  deleteTaskById,
  getAllTasks
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

  test('Should can send', async () => {
    // arrange
    const req = {
      body: null
    };
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };
    Task.mockRejectedValueOnce('error');

    // act
    await createTask(req, res);

    // assert
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('deleteTaskById', () => {
  test('should call json', async () => {
    // arrange
    const req = {
      params: {
        taskId: null
      }
    };
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };

    // act
    await deleteTaskById(req, res);

    // assert
    expect(res.json).toHaveBeenCalled();
  });

  test('Should call status with 204', async () => {
    // arrange
    const req = {
      params: {
        taskId: null
      }
    };
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };

    // act
    await deleteTaskById(req, res);

    // assert
    expect(res.status).toHaveBeenCalledWith(204);
  });

  test('Should fail and send an error', async () => {
    // arrange
    const req = {
      params: {
        taskId: null
      }
    };
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };
    Task.findByIdAndDelete.mockRejectedValueOnce('error');

    // act
    await deleteTaskById(req, res);

    // assert
    describe(res.send).toHaveBeenCalledWith('error');
  });
});

describe('getAllTasks', () => {
  test('Should get all tasks', async () => {
    // arrange
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };
    Task.find.mockResolvedValueOnce([{ name: 'Milk' }]);

    // act
    await getAllTasks(null, res);

    // assert
    expect(res.json).toHaveBeenCalledWith([{ name: 'Milk' }]);
  });

  test('Should fail and send an error', async () => {
    // arrange
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };
    Task.mockRejectedValueOnce('error');

    // act
    await getAllTasks(null, res);

    // assert
    expect(res.send).toHaveBeenCalledWith('error');
  });
});
