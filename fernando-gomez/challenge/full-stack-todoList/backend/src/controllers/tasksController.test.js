/* eslint-disable class-methods-use-this */
const { getAll, addOneToStock, removeOneFromStock } = require('./tasksController')();
const Task = require('../model/taskModel');

jest.mock('../model/taskModel');

describe('Given a getAll function', () => {
  test('Should respond with status 200', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };
    Task.find.mockResolvedValueOnce(200);

    await getAll(null, res);

    expect(res.status).toHaveBeenCalledWith(200);
  });

  test('Should respond with tasks json', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };
    Task.find.mockResolvedValueOnce([{}]);

    await getAll(null, res);

    expect(res.json).toHaveBeenCalledWith([{}]);
  });

  test('Should respond with error', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };
    Task.find.mockRejectedValueOnce('error');

    await getAll(null, res);

    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('Given a add one to stock function', () => {
  test('Should respond with status 200', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };

    const req = {
      params: {
        taskId: 3
      }
    };

    Task.findByIdAndUpdate.mockResolvedValueOnce();

    await addOneToStock(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
  });

  test('Should respond with task', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };

    const req = {
      params: {
        taskId: 3
      }
    };

    Task.findByIdAndUpdate.mockResolvedValueOnce({ fredy: 'si' });

    await addOneToStock(req, res);

    expect(res.json).toHaveBeenCalledWith({ fredy: 'si' });
  });

  test('Should respond with error', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };

    const req = {
      params: {
        taskId: 3
      }
    };

    Task.findByIdAndUpdate.mockRejectedValueOnce('error');

    await addOneToStock(req, res);

    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('Given a remove one from stock function', () => {
  test('Should respond with status 200', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };

    const req = {
      params: {
        taskId: 3
      }
    };

    Task.findByIdAndUpdate.mockResolvedValueOnce();

    await removeOneFromStock(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
  });

  test('Should respond with task', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };

    const req = {
      params: {
        taskId: 3
      }
    };

    Task.findByIdAndUpdate.mockResolvedValueOnce({ fredy: 'si' });

    await removeOneFromStock(req, res);

    expect(res.json).toHaveBeenCalledWith({ fredy: 'si' });
  });

  test('Should respond with error', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };

    const req = {
      params: {
        taskId: 3
      }
    };

    Task.findByIdAndUpdate.mockRejectedValueOnce('error');

    await removeOneFromStock(req, res);

    expect(res.send).toHaveBeenCalledWith('error');
  });
});
