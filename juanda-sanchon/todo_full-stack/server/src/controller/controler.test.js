const { getAllTasks, createOne, updateTask } = require('./tasksController')();
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
