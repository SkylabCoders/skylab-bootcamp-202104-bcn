const { getAllTasks } = require('./tasksController')();
const Task = require('../model/toDoTask');

jest.mock('../model/toDoTask.js');

describe('when call a getAllTask function', () => {
  test('recibed a json', async () => {
    const res = {
      json: jest.fn()
    };
    Task.find.MockResolvedValue();
    await getAllTasks(null, res);
    expect(res.json).toHaveBeenCalled();
  });
});
