const heroesController = require('./heroesController');
const Hero = require('../model/heroModel');

jest.mock('../model/heroModel');

const {
  getAll,
  createOne,
  getById,
  updateById,
  deleteById,
} = heroesController();

describe('given a getAll controller', () => {
  test('shoud get all heroes', async () => {
    // arrange
    const res = {
      json: jest.fn(),
    };
    Hero.find.mockResolvedValue([{ id: 11, name: 'Dr Nice' }]);

    // act
    await getAll(null, res);

    // assert
    expect(res.json).toHaveBeenCalledWith([{ id: 11, name: 'Dr Nice' }]);
  });
});

describe('given a createOne controller', () => {
  class MockHero {
    constructor(name) {
      this.name = name;
    }

    // eslint-disable-next-line class-methods-use-this
    save() {}
  }
  test('shoud create a hero', async () => {
    // arrange
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      body: null,
    };
    const newHero = new MockHero('Anna');

    Hero.mockReturnValueOnce(newHero);

    // act
    await createOne(req, res);
    // assert
    expect(res.json).toHaveBeenCalledWith({ name: 'Anna' });
  });
  test('shoud return error', async () => {
    // arrange
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      body: null,
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

describe('given a getById controller', () => {
  test('shoud get one hero', async () => {
    // arrange
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      params: { heroId: 11 },
    };
    Hero.findById.mockReturnValueOnce({ id: 11, name: 'Dr Nice' });
    // act
    await getById(req, res);

    // assert
    expect(res.json).toHaveBeenCalledWith({ id: 11, name: 'Dr Nice' });
  });
  test('shoud not get one hero', async () => {
    // arrange
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      params: { heroId: 9 },
    };
    Hero.findById.mockRejectedValueOnce('error');
    // act
    await getById(req, res);

    // assert
    expect(res.status).toHaveBeenCalledWith(404);
  });
});

describe('given a updateById controller', () => {
  test('shoud update selected hero', async () => {
    // arrange
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      params: { heroId: 20 },
      body: { id: 20, name: 'Anna' },
    };
    Hero.findByIdAndUpdate.mockReturnValueOnce(req.body);
    // act
    await updateById(req, res);

    // assert
    expect(res.json).toHaveBeenCalledWith({ id: 20, name: 'Anna' });
  });
  test('shoud reject selected hero', async () => {
    // arrange
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      params: { heroId: 20 },
      body: { id: 20, name: 'Anna' },
    };
    Hero.findByIdAndUpdate.mockRejectedValueOnce('error');
    // act
    await updateById(req, res);

    // assert
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('given a deleteById controller', () => {
  test('shoud delete selected hero', async () => {
    // arrange
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      params: { heroId: null },
    };
    // act
    await deleteById(req, res);

    // assert
    expect(res.status).toHaveBeenCalledWith(204);
  });
  test('shoud delete selected hero', async () => {
    // arrange
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      params: { heroId: 2222 },
    };
    Hero.findByIdAndDelete.mockRejectedValueOnce('error');
    // act
    await deleteById(req, res);

    // assert
    expect(res.send).toHaveBeenCalledWith('error');
  });
});
