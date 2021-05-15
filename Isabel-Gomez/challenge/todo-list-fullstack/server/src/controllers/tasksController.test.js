const { getAll } = require('./tasksController');
const Task = require('../model/taskModel');

jest.mock('../model/taskModel');

describe('getAll', () => {
  const res = {
    json: jest.fn(),
    status: jest.fn(),
    send: jest.fn()
  };

  test('should get all tasks', async () => {
    Task.find.mockResolvedValue({ name: 'comprar leche', completed: false });
    await getAll(null, res);
    expect(res.json).toHaveBeenCalledWith({ name: 'comprar leche', completed: false });
  });
});
