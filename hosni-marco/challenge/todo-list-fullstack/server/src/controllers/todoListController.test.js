const getAll = require('./todoListController');
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
