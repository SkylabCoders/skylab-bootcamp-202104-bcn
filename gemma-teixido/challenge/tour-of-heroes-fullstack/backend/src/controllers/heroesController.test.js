const {
  getAll,
  createOne,
  getById,
  updateById,
  deleteById
} = require('./heroesController')();
const Hero = require('../../model/heroModel');

jest.mock('../../model/heroModel');

describe('getAll', () => {
  test('shoud get all heroes', async () => {
    const res = {
      json: jest.fn()
    };
    Hero.find.mockResolvedValueOnce([{ name: 'Pepe' }]);

    await getAll(null, res);

    expect(res.json).toHaveBeenCalledWith([{ name: 'Pepe' }]);
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

  test('should call json', async () => {
    const req = {
      body: null
    };
    const res = {
      json: jest.fn(),
      send: jest.fn()
    };

    const newHero = new MockHero('hero name');

    Hero.mockReturnValueOnce(newHero);

    await createOne(req, res);

    expect(res.json).toHaveBeenCalledWith({ name: 'hero name' });
  });

  test('should call send', async () => {
    const req = {
      body: null
    };
    const res = {
      json: jest.fn(),
      send: jest.fn()
    };

    Hero.mockReturnValueOnce({
      save: jest.fn().mockRejectedValueOnce('error')
    });

    await createOne(req, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('getById', () => {
  test('should call res.status with 404', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };

    const req = {
      params: {
        heroId: null
      }
    };

    Hero.findById.mockRejectedValueOnce();

    await getById(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
  });

  test('should call res.send with error', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };

    const req = {
      params: {
        heroId: null
      }
    };

    Hero.findById.mockRejectedValueOnce('error');

    await getById(req, res);

    expect(res.send).toHaveBeenCalledWith('error');
  });

  test('should call res.json ', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };

    const req = {
      params: {
        heroId: null
      }
    };

    Hero.findById.mockResolvedValueOnce('un heroe');

    await getById(req, res);

    expect(res.json).toHaveBeenCalledWith('un heroe');
  });
});

describe('updateById', () => {
  test('should call res.json', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn()
    };

    const req = {
      params: {
        heroId: null
      },
      body: {}
    };

    await updateById(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call res.send', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn()
    };

    const req = {
      body: null,
      params: {
        heroId: null
      }
    };

    Hero.findByIdAndUpdate.mockRejectedValueOnce('error al buscar el heroe');

    await updateById(req, res);

    expect(res.send).toHaveBeenCalledWith('error al buscar el heroe');
  });
});

describe('deleteById', () => {
  test('should call json', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };

    const req = {
      params: {
        heroId: null
      }
    };

    await deleteById(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call status with 204', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };

    const req = {
      params: {
        heroId: null
      }
    };

    await deleteById(req, res);

    expect(res.status).toHaveBeenCalledWith(204);
  });

  test('should fail and call res.send with error', async () => {
    const req = {
      params: {
        heroId: null
      }
    };
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };
    Hero.findByIdAndDelete.mockRejectedValueOnce('error');

    await deleteById(req, res);

    expect(res.send).toHaveBeenCalledWith('error');
  });
});
