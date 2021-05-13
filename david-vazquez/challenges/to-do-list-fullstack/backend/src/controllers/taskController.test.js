const {
  getAllTasks,
  createOne,
  deleteById,
  updateById,
} = require('./tasksController')();

const Task = require('../model/taskModel');

jest.mock('./../model/taskModel');

describe('getAllTasks', () => {
  test('should get all tasks', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    Task.find.mockResolvedValueOnce({ name: 'hola' });
    await getAllTasks(null, res);
    expect(res.json).toHaveBeenCalledWith({ name: 'hola' });
  });
  test('should send error', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    Task.find.mockRejectedValueOnce('error');
    await getAllTasks(null, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('createOne', () => {
  test('should create a task', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      body: null,
    };
    await createOne(req, res);
    expect(res.json).toHaveBeenCalled();
  });
  test('should send a error', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      body: null,
    };
    Task.mockReturnValueOnce({
      save: jest.fn().mockRejectedValueOnce('error'),
    });
    await createOne(req, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('deleteById', () => {
  test('should delete a task by id', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
      status: jest.fn(),
    };
    const req = {
      params: {
        taskId: null,
      },
    };
    await deleteById(req, res);
    expect(res.json).toHaveBeenCalled();
  });
  test('should send a error', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
      status: jest.fn(),
    };
    const req = {
      params: {
        taskId: null,
      },
    };
    Task.findByIdAndDelete.mockRejectedValueOnce('error');
    await deleteById(req, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('updateById', () => {
  test('should update a task by id', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      params: {
        taskId: null,
      },
      body: null,
    };
    Task.findByIdAndUpdate.mockResolvedValueOnce('hola');
    await updateById(req, res);
    expect(res.json).toHaveBeenCalledWith('hola');
  });
  test('should send a error', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      params: {
        taskId: null,
      },
      body: null,
    };
    Task.findByIdAndUpdate.mockRejectedValueOnce('error');
    await updateById(req, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});
