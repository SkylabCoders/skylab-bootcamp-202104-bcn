const {
  getAllTasks, createOne, updateTask, deleteTask
} = require('./tasksController')();
const Task = require('../model/toDoTask');

jest.mock('../model/toDoTask.js');

describe('when call a getAllTask function', () => {
  test('recibed a json', async () => {
    const res = {
      json: jest.fn()
    };
    Task.find.mockResolvedValue();
    await getAllTasks(null, res);
    expect(res.json).toHaveBeenCalled();
  });
});

describe('when call a createOne function', () => {
  class MockTask {
    constructor(nameTask) {
      this.nameTask = nameTask;
      this.isDone = false;
    }

    // eslint-disable-next-line class-methods-use-this
    save() {}
  }
  test('should recibed json whit new task', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn()
    };
    const req = {
      body: null
    };
    const task = new MockTask('nueva tarea');
    Task.mockReturnValueOnce(task);
    await createOne(req, res);
    expect(res.json).toHaveBeenCalledWith({ nameTask: 'nueva tarea', isDone: false });
  });
  test('An error is send', async () => {
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

    await createOne(req, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('when call a updateTask function', () => {
  test('should a json with data', async () => {
    const res = {
      json: jest.fn()
    };
    const req = {
      params: { idTask: 2 },
      body: null
    };

    Task.findByIdAndUpdate.mockResolvedValueOnce('pepo');
    await updateTask(req, res);

    expect(res.json).toHaveBeenCalledWith('pepo');
  });
});
describe('when call a updateTask function', () => {
  test('return func with error ', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };
    const req = {
      params: {
        idTask: 5
      },
      body: null
    };
    Task.findByIdAndUpdate.mockRejectedValueOnce('error');
    await updateTask(req, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('when call a delete task', () => {
  test('recibed a json', async () => {
    const res = {
      json: jest.fn()
    };
    const req = {
      params: {
        idTask: 3
      }
    };
    Task.findByIdAndDelete.mockResolvedValue();
    await deleteTask(req, res);
    expect(res.json).toHaveBeenCalled();
  });
});
describe('when call a delete task', () => {
  test('Should call a send func in error', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn()
    };
    const req = {
      params: {
        idTask: 3
      }
    };
    Task.findByIdAndDelete.mockRejectedValueOnce('error');
    await deleteTask(req, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});
