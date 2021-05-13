const { getAll } = require('./tasksController')();
const Task = require('../model/taskModel');

jest.mock('./../model/taskModel');

describe('Given a getAll function', () => {
  test('Array of tasks is recieved', async () => {
    const res = {
      json: jest.fn(),
    };
    Task.find.mockResolvedValue([{ id: 1, name: 'Sacar al perro' }]);
    await getAll(null, res);
    expect(res.json).toHaveBeenCalledWith([{ id: 1, name: 'Sacar al perro' }]);
  });
});
