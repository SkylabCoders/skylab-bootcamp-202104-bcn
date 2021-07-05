const { getAll, getTaskById } = require('./todoController');
const Task = require('../model/todoModel');

jest.mock('../model/todoModel');

describe('getAll', () => {
  test('shoud get all heroes', async () => {
    // arrange
    const res = {
      json: jest.fn()
    };

    Task.find.mockResolvedValueOnce([{ name: 'Emerson' }]);

    // act
    await getAll(null, res);

    // assert
    expect(res.json).toHaveBeenCalledWith([{ name: 'Emerson' }]);
  });
});

describe('getTaskById', () => {
  test('should call res.status with 404', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };

    const req = {
      params: {
        taskId: null
      }
    };

    Task.findById.mockRejectedValueOnce();

    await getTaskById(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
  });
});
