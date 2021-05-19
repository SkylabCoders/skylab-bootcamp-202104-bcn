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
  test('Shoud get all heroes', async () => {
    // arrange
    const res = {
      json: jest.fn(),
    };
    Hero.find.mockResolvedValueOnce([{ name: 'Mr Nice' }]);

    // act
    await getAll(null, res);

    // assert
    expect(res.json).toHaveBeenCalledWith([{ name: 'Mr Nice' }]);
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

  test('Should call json', async () => {
    const req = {
      body: null,
    };
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };

    const newHero = new MockHero('pepito');

    Hero.mockReturnValueOnce(newHero);

    await createOne(req, res);

    expect(res.json).toHaveBeenCalledWith({ name: 'pepito' });
  });

  test('Should call send', async () => {
    const req = {
      body: null,
    };
    const res = {
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

describe('getById', () => {
  test('Shoud call json', async () => {
    // arrange
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

    Hero.findById.mockResolvedValueOnce({ name: 'Mr Nice' });

    // act
    await getById(req, res);

    // assert
    expect(res.json).toHaveBeenCalledWith({ name: 'Mr Nice' });
  });

  test('Shoud call res.status with 404 error', async () => {
    // arrange
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

    Hero.findById.mockRejectedValueOnce(404);

    // act
    await getById(req, res);

    // assert
    expect(res.status).toHaveBeenCalledWith(404);
  });

  test('Shoud call res.send with error', async () => {
    // arrange
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

    Hero.findById.mockRejectedValueOnce('error');

    // act
    await getById(req, res);

    // assert
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('updateById', () => {
  test('Shoud call res.json', async () => {
    // arrange
    const req = {
      params: {
        heroId: null,
      },
      body: {},
    };
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };

    // act
    await updateById(req, res);

    // assert
    expect(res.json).toHaveBeenCalled();
  });

  test('Shoud call res.send', async () => {
    // arrange
    const req = {
      params: {
        heroId: null,
      },
      body: {},
    };
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    Hero.findByIdAndUpdate.mockRejectedValueOnce('error al buscar el heroe');

    // act
    await updateById(req, res);

    // assert
    expect(res.send).toHaveBeenCalledWith('error al buscar el heroe');
  });
});

describe('deleteById', () => {
  test('should call json', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn(),
    };

    const req = {
      params: {
        heroId: null,
      },
    };

    await deleteById(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call status with 204', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn(),
    };

    const req = {
      params: {
        heroId: null,
      },
    };

    await deleteById(req, res);

    expect(res.status).toHaveBeenCalledWith(204);
  });

  test('should fail and call res.send with error', async () => {
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
    Hero.findByIdAndDelete.mockRejectedValueOnce('error');

    await deleteById(req, res);

    expect(res.send).toHaveBeenCalledWith('error');
  });
});
