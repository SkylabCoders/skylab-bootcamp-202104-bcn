/* eslint-disable class-methods-use-this */
const { getAll, createOne } = require('./todoListController')();
const todoList = require('../model/todoListModel');

jest.mock('./../model/todoListModel');

describe('getAll', () => {
  test('Should get all list', async () => {
    const res = {
      json: jest.fn()
    };

    todoList.find.mockResolvedValueOnce([{ task: 'testear controllers', done: false }]);

    await getAll(null, res);

    expect(res.json).toHaveBeenCalledWith([{ task: 'testear controllers', done: false }]);
  });
});

describe('createOne ', () => {
  class MockTask {
    constructor(addTask) {
      this.task = addTask;
    }

    save() {}
  }

  test('Should call json ', async () => {
    const req = {
      body: null
    };
    const res = {
      json: jest.fn(),
      send: jest.fn()
    };

    const newTask = new MockTask('Make new task');

    todoList.mockReturnValueOnce(newTask);

    await createOne(req, res);

    expect(res.json).toHaveBeenCalledWith({ task: 'Make new task' });
  });
});
