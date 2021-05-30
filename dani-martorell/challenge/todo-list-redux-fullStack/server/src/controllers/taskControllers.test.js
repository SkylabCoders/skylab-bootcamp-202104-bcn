const {
  getAll,
  createOne,
  deleteById,
  updateById,

} = require('./tasksController')();
const Task = require('../model/taskModel');

jest.mock('../model/taskModel');

describe('getAll', () => {
  test('shoud get all tasks', async () => {
    const res = {
      json: jest.fn(),
    };
    Task.find.mockResolvedValueOnce([{ name: 'do laundry' }]);

    await getAll(null, res);

    expect(res.json).toHaveBeenCalledWith([{ name: 'do laundry' }]);
  });
});

describe('createOne', () => {
  class MockTask {
    constructor(name) {
      this.name = name;
    }

    // eslint-disable-next-line class-methods-use-this
    save() {}
  }

  test('should call json', async () => {
    const req = {
      body: null,
    };
    const res = {
      json: jest.fn(),

    };

    const newTask = new MockTask('this is a new task');
    Task.mockReturnValueOnce(newTask);
    await createOne(req, res);
    expect(res.json).toHaveBeenCalledWith({ name: 'this is a new task' });
  });

  test('should call status 404', async () => {
    const req = {
      body: null,
    };
    const res = {
      status: jest.fn(),
      send: jest.fn(),

    };

    Task.mockRejectedValueOnce({
      save: jest.fn().mockRejectedValueOnce(),
    });
    await createOne(req, res);
    expect(res.status).toHaveBeenCalled();
  });
});

describe('deleteById', () => {
  test('Should call status 200', async () => {
    const req = {
      params: { taskId: null },
    };
    const res = {
      status: jest.fn(),
      send: jest.fn(),
    };
    Task.findByIdAndDelete.mockResolvedValueOnce();
    await deleteById(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });

  test('Should call status 404', async () => {
    const req = {
      params: { taskId: null },
    };
    const res = {
      status: jest.fn(),
      send: jest.fn(),
    };
    Task.findByIdAndDelete.mockRejectedValueOnce('error message');
    await deleteById(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });
});

describe('updateById', () => {
  test('Should return an updated task', async () => {
    const req = {
      params: { taskId: null },
      body: {},
    };
    const res = {
      json: jest.fn(),
    };
    Task.findByIdAndUpdate.mockResolvedValueOnce({ name: 'do something' });
    await updateById(req, res);
    expect(res.json).toHaveBeenCalledWith({ name: 'do something' });
  });

  test('Should call status 404', async () => {
    const req = {
      params: { taskId: null },
    };
    const res = {
      status: jest.fn(),
      send: jest.fn(),
    };
    Task.findByIdAndDelete.mockRejectedValueOnce('error message');
    await updateById(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });
});
