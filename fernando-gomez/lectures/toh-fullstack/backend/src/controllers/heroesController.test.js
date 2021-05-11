const {
  getAll,
  createOne,
  getById,
  updateById,
  deleteById,
} = require('./heroesController')();
const Hero = require('../model/heroModel');

jest.mock('../model/heroModel');

describe('Given a get all function', () => {
  test('Should get all heroes', async () => {
    // arrange
    const res = {
      json: jest.fn(),
    };
    Hero.find.mockResolvedValueOnce([{ name: 'Super chero' }]);
    // act
    await getAll(null, res);
    // assert
    expect(res.json).toHaveBeenCalledWith([{ name: 'Super chero' }]);
  });
});

describe('Given a create hero function', () => {
  class MockHero {
    constructor(name) {
      this.name = name;
    }

    // eslint-disable-next-line class-methods-use-this
    save() {}
  }

  test('Should return a json with the mocked hero', async () => {
    // arrange
    const req = {
      body: null,
    };
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    const newHero = new MockHero('Ma hero');
    Hero.mockReturnValueOnce(newHero);
    // act
    await createOne(req, res);
    // assert
    expect(res.json).toHaveBeenCalledWith({ name: 'Ma hero' });
  });

  test('Should call send when the value is rejected', async () => {
    // arrange
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
    // act
    await createOne(req, res);
    // assert
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('Given a getById function', () => {
  test('should call res.status with code 404', async () => {
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
    // act
    Hero.findById.mockRejectedValueOnce();

    await getById(req, res);
    // assert
    expect(res.status).toHaveBeenCalledWith(404);
  });

  test('should call res.send with error', async () => {
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

    Hero.findById.mockRejectedValueOnce('error message');
    // act
    await getById(req, res);
    // assert
    expect(res.send).toHaveBeenCalledWith('error message');
  });

  test('Should call res.json with a mocked hero', async () => {
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

    Hero.findById.mockResolvedValueOnce('Ma hero');
    // act
    await getById(req, res);
    // assert
    expect(res.json).toHaveBeenCalledWith('Ma hero');
  });
});

describe('Given a update by Id function', () => {
  test('Should call res.json', async () => {
    // arrange
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };

    const req = {
      params: {
        heroId: null,
      },
      body: {},
    };

    // act
    await updateById(req, res);

    // assert
    expect(res.json).toHaveBeenCalled();
  });

  test('should call res.send', async () => {
    // arrange
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };

    const req = {
      body: null,
      params: {
        heroId: null,
      },
    };

    Hero.findByIdAndUpdate.mockRejectedValueOnce('What an error');
    // act
    await updateById(req, res);
    // assert
    expect(res.send).toHaveBeenCalledWith('What an error');
  });
});

describe('deleteById', () => {
  test('should call json', async () => {
    // arrange
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
    // act
    await deleteById(req, res);
    // assert
    expect(res.json).toHaveBeenCalled();
  });

  test('should call status with 204', async () => {
    // arrange
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
    // act
    await deleteById(req, res);
    // assert
    expect(res.status).toHaveBeenCalledWith(204);
  });

  test('should fail and call res.send with error', async () => {
    // arrange
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
    // act
    await deleteById(req, res);
    // assert
    expect(res.send).toHaveBeenCalledWith('error');
  });
});
