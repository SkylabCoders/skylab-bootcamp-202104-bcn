const {
  getAll,
  createOne,
  getById,
  updateById,
  deleteById,
} = require('./heroesController')();

const Hero = require('../model/heroModel');

jest.mock('../model/heroModel');

describe('Given getAll function', () => {
  test('when resolved, then return res.json([{}])', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn(),
    };
    Hero.find.mockResolvedValueOnce([{}]);
    await getAll(null, res);
    expect(res.json).toHaveBeenCalledWith([{}]);
  });

  test('when rejected, then return res.send(error)', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn(),
    };
    Hero.find.mockRejectedValueOnce('error');
    await getAll(null, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('Given createOne function', () => {
  test('when resolved, then return res.json({})', async () => {
    const req = {
      body: {
        name: 'name',
      },
    };
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn(),
    };
    Hero.mockReturnValueOnce({
      save: jest.fn().mockResolvedValueOnce({ body: { name: 'name' } }),
    });
    await createOne(req, res);
    expect(res.json).toHaveBeenCalledWith({ body: { name: 'name' } });
  });

  test('when rejected, then return res.send(error)', async () => {
    const req = {
      body: null,
    };
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn(),
    };
    Hero.mockReturnValueOnce({
      save: jest.fn().mockRejectedValueOnce('error'),
    });
    await createOne(req, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('Given getById function', () => {
  test('when resolved, then return res.json({})', async () => {
    const req = {
      params: {
        heroId: 1,
      },
    };
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
    Hero.findById.mockResolvedValueOnce({ heroId: 1 });
    await getById(req, res);
    expect(res.json).toHaveBeenCalledWith({ heroId: 1 });
  });

  test('when rejected, then return res.send(error)', async () => {
    const req = {
      params: {
        heroId: null,
      },
    };
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn(),
    };
    Hero.findById.mockRejectedValueOnce('error');
    await getById(req, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('Given updateById function', () => {
  test('when resolved, then return res.json', async () => {
    const req = {
      params: {
        heroId: 1,
      },
      body: {
        name: 'name',
      },
    };
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn(),
    };
    Hero.findByIdAndUpdate.mockResolvedValueOnce({ heroId: 1, name: 'name' });
    await updateById(req, res);
    expect(res.json).toHaveBeenCalledWith({ heroId: 1, name: 'name' });
  });

  test('when rejected, then return res.send(error)', async () => {
    const req = {
      params: {
        heroId: 1,
      },
      body: {
        name: 'name',
      },
    };
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn(),
    };
    Hero.findByIdAndUpdate.mockRejectedValueOnce('error');
    await updateById(req, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('Given deleteById function', () => {
  test('when resolved, then return res.json', async () => {
    const req = {
      params: {
        heroId: 1,
      },
    };
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn(),
    };
    Hero.findByIdAndDelete.mockResolvedValueOnce({ heroId: 1 });
    await deleteById(req, res);
    expect(res.json).toHaveBeenCalledWith();
  });
  test('when rejected, then return res.send(error)', async () => {
    const req = {
      params: {
        heroId: 1,
      },
    };
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn(),
    };
    Hero.findByIdAndDelete.mockRejectedValueOnce('error');
    await deleteById(req, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});
