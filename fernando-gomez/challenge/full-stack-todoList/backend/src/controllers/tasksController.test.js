/* eslint-disable class-methods-use-this */
const {
  getAll, addTask, deleteTaskById, updateTaskById
} = require('./tasksController')();
const Task = require('../model/taskModel');

jest.mock('../model/taskModel');

describe('Given a getAll function', () => {
  test('Should respond with status 200', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };
    Task.find.mockResolvedValueOnce(200);

    await getAll(null, res);

    expect(res.status).toHaveBeenCalledWith(200);
  });

  test('Should respond with tasks json', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };
    Task.find.mockResolvedValueOnce([{}]);

    await getAll(null, res);

    expect(res.json).toHaveBeenCalledWith([{}]);
  });

  test('Should respond with error', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };
    Task.find.mockRejectedValueOnce('error');

    await getAll(null, res);

    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('Given an add one to stock function', () => {
  test('Should respond with status 200', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };

    const req = {
      params: {
        taskId: 3
      }
    };

    Task.findByIdAndUpdate.mockResolvedValueOnce();

    await addTask(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
  });

  test('should call send', async () => {
    // arrange
    const req = {
      body: null
    };
    const res = {
      json: jest.fn(),
      send: jest.fn()
    };

    Task.mockReturnValueOnce({
      save: jest.fn().mockRejectedValueOnce('error')
    });

    // act
    await addTask(req, res);
    // assert
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('Given a remove task function', () => {
  test('Should respond with status 204', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };

    const req = {
      params: {
        taskId: 3
      }
    };

    Task.findByIdAndUpdate.mockResolvedValueOnce();

    await deleteTaskById(req, res);

    expect(res.status).toHaveBeenCalledWith(204);
  });

  test('Should respond with error', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };

    const req = {
      params: {
        taskId: 3
      }
    };

    Task.findByIdAndDelete.mockRejectedValueOnce('error');

    await deleteTaskById(req, res);

    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('Given a update task function', () => {
  test('Should respond with updated task json', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };

    const req = {
      body: {},
      params: { taskId: 3 }
    };

    Task.findByIdAndUpdate.mockResolvedValueOnce([{}]);

    await updateTaskById(req, res);

    expect(res.json).toHaveBeenCalledWith([{}]);
  });

  test('should call send', async () => {
    // arrange
    const req = {
      body: null,
      params: { taskId: 3 }
    };
    const res = {
      json: jest.fn(),
      send: jest.fn()
    };

    Task.mockReturnValueOnce({
      save: jest.fn().mockRejectedValueOnce('error')
    });
    // act
    await updateTaskById(req, res);
    // assert
    expect(res.send).toHaveBeenCalledWith('error');
  });
});
