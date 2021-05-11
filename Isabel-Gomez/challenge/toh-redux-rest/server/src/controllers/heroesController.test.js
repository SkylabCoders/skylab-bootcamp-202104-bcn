const Hero = require('../model/heroModel');
const {
  getAll,
  createOne,
  getById,
  updateById,
  deleteById,
} = require('./heroesController')();

jest.mock('../model/heroModel');

describe('getAll', () => {
  test('shoud get all heroes', async () => {
    // arrange
    const res = {
      json: jest.fn(),
    };
    Hero.find.mockResolvedValueOnce([{ name: 'Pepe' }]);
    // act
    await getAll(null, res);
    // assert
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

  test('should call json with new hero', async () => {
    // arrange
    const req = {
      body: null,
    };
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };

    const newHero = new MockHero('hero name');

    Hero.mockReturnValueOnce(newHero);
    // act
    await createOne(req, res);
    // assert
    expect(res.json).toHaveBeenCalledWith({ name: 'hero name' });
  });

  test('should show error', async () => {
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

describe('getById', () => {
  test('should show one hero selected by Id', async () => {
    // arrange
    const req = { params: { heroId: null } };
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    Hero.findById.mockResolvedValueOnce({ name: 'Pepe' });
    // act
    await getById(req, res);
    // assert
    expect(res.json).toHaveBeenCalledWith({ name: 'Pepe' });
  });
  test('should show error', async () => {
    // arrange
    const req = { params: { heroId: null } };
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    Hero.findById.mockRejectedValueOnce('error');
    // act
    await getById(req, res);
    // assert
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('updateById', () => {
  test('shoud update one heroe by Id', async () => {
    // arrange
    const req = {
      params: { heroId: {} },
      body: {},
    };
    const res = {
      json: jest.fn(),
    };
    Hero.findByIdAndUpdate.mockResolvedValueOnce([{ id: 1, name: 'Josep' }]);
    // act
    await updateById(req, res);
    // assert
    expect(res.json).toHaveBeenCalledWith([{ id: 1, name: 'Josep' }]);
  });
  test('should show error', async () => {
    // arrange
    const req = { params: { heroId: null }, body: {} };
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    Hero.findByIdAndUpdate.mockRejectedValueOnce('error');
    // act
    await updateById(req, res);
    // assert
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('deleteById', () => {
  test('shoud delete one heroe by Id', async () => {
    // arrange
    const req = { params: { heroId: null } };
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    Hero.findOneAndDelete.mockResolvedValue();
    // act
    await deleteById(req, res);
    // assert
    expect(res.json).toHaveBeenCalledWith();
  });
  test('should show error', async () => {
    // arrange
    const req = { params: { heroId: null } };
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    Hero.findOneAndDelete.mockRejectedValueOnce('error');
    // act
    await deleteById(req, res);
    // assert
    expect(res.send).toHaveBeenCalledWith('error');
  });
});
