const {
  getAll,
  addHero,
  getHeroById,
  modifyHeroById,
  deleteHeroById
} = require('./heroesController')();
const Hero = require('../model/heroModel');

jest.mock('../model/heroModel');

describe('getAll', () => {
  test('shoud get all heroes', async () => {
    // arrange
    const res = {
      json: jest.fn()
    };
    Hero.find.mockResolvedValueOnce([{ name: 'Pepe' }]);

    // act
    await getAll(null, res);

    // assert
    expect(res.json).toHaveBeenCalledWith([{ name: 'Pepe' }]);
  });
});

describe('addHero', () => {
  class MockHero {
    constructor(name) {
      this.name = name;
    }

    // eslint-disable-next-line class-methods-use-this
    save() {}
  }

  test('should call json', async () => {
    // arrange
    const req = {
      body: null
    };
    const res = {
      json: jest.fn(),
      send: jest.fn()
    };

    const newHero = new MockHero('hero name');

    Hero.mockReturnValueOnce(newHero);

    // act
    await addHero(req, res);
    // assert
    expect(res.json).toHaveBeenCalledWith({ name: 'hero name' });
  });

  test('should call send', async () => {
    // arrange
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

    // act
    await addHero(req, res);
    // assert
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('getHeroById', () => {
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

    await getHeroById(req, res);

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

    await getHeroById(req, res);

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

    await getHeroById(req, res);

    expect(res.json).toHaveBeenCalledWith('un heroe');
  });
});

describe('modifyHeroById', () => {
  test('should call res.json', async () => {
    // arrange
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

    // act
    await modifyHeroById(req, res);

    // assert
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

    await modifyHeroById(req, res);

    expect(res.send).toHaveBeenCalledWith('error al buscar el heroe');
  });
});

describe('deleteHeroById', () => {
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

    await deleteHeroById(req, res);

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

    await deleteHeroById(req, res);

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

    await deleteHeroById(req, res);

    expect(res.send).toHaveBeenCalledWith('error');
  });
});
