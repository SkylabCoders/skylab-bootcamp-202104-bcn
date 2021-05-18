const {
  getAll,
  createOne,
  getById,
  updateById,
  deleteById,
} = require('./heroesController')();
const Hero = require('../model/heroModel');

jest.mock('../model/heroModel');

describe('getAll', () => {
  test('shoud get all heroes', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };

    Hero.find.mockResolvedValueOnce([{ name: 'Pepe' }]);

    await getAll(null, res);
    expect(res.json).toHaveBeenCalledWith([{ name: 'Pepe' }]);
  });

  test('shoud return a reject promise with an error', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };

    Hero.find.mockRejectedValueOnce('error');

    await getAll(null, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('createOne', () => {
  class MockHero {
    constructor(name) {
      this.name = name;
    }

    // eslint-disable-next-line class-methods-use-this
    save() {}
  }

  test('shoud create one hero', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };

    const req = {
      body: {
        name: 'Elvis',
      },
    };

    const newHero = new MockHero('hero name');

    Hero.mockReturnValueOnce(newHero);

    await createOne(req, res);
    expect(res.json).toHaveBeenCalledWith(newHero);
  });
  test('shoud return status 201', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };

    const req = {
      body: {
        name: 'Elvis',
      },
    };

    await createOne(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
  });

  test('should send and error', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };

    const req = {
      body: {
        name: 'Elvis',
      },
    };

    Hero.mockReturnValueOnce({
      save: jest.fn().mockRejectedValueOnce('error'),
    });

    await createOne(req, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('getById', () => {
  test('shoud return a Hero with the selected id', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };

    const req = {
      params: { heroId: 2 },
    };

    Hero.findById.mockResolvedValueOnce({ id: 2, name: 'Tino' });

    await getById(req, res);
    expect(res.json).toHaveBeenCalledWith({ id: 2, name: 'Tino' });
  });
  test('shoud return status 200', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };

    const req = {
      params: { heroId: 2 },
    };

    Hero.findById.mockResolvedValueOnce({ id: 2, name: 'Tino' });

    await getById(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });

  test('should call res.status with 404', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };

    const req = {
      params: {
        heroId: null,
      },
    };

    Hero.findById.mockReturnValueOnce(false);

    await getById(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
  });
});

describe('updateById', () => {
  test('shoud return an array with the updated heroes', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };

    const req = {
      body: { name: 'Josep' },
      params: { heroId: 2 },
    };

    Hero.findByIdAndUpdate.mockResolvedValueOnce([{ id: 1, name: 'Pepe' }, { id: 2, name: 'Josep' }]);

    await updateById(req, res);
    expect(res.json).toHaveBeenCalledWith([{ id: 1, name: 'Pepe' }, { id: 2, name: 'Josep' }]);
  });
  test('shoud send and error message', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };

    const req = {
      params: { heroId: 2 },
    };
    Hero.findByIdAndUpdate.mockRejectedValueOnce('error');

    await updateById(req, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('deleteById', () => {
  test('shoud return error 404', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };

    const req = {
      params: { heroId: 2 },
    };

    Hero.findByIdAndDelete.mockResolvedValueOnce();

    await deleteById(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });
  test('shoud send an error message', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };

    const req = {
      params: { heroId: 2 },
    };

    Hero.findByIdAndDelete.mockRejectedValueOnce('error');

    await deleteById(req, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});
