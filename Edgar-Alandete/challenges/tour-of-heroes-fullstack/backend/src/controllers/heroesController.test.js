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
  test('shoud create one hero', () => {
    // arrange
    const res = {
      json: jest.fn(),
    };
    const req = {
      body: { id: 666, name: 'Pepe' },
    };
    // act
    createOne(req, res);
    // assert
    expect(res.json).toHaveBeenCalledWith([{ id: 777, name: 'Maria' }, { id: 666, name: 'Pepe' }]);
  });
});

describe('getById', () => {
  test('shoud get one hero by id', () => {
    // arrange
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };
    const req = {
      params: { heroId: 777 },
    };
      // act
    getById(req, res);
    // assert
    expect(res.json).toHaveBeenCalledWith({ id: 777, name: 'Isabel' });
  });

  test('shoud show an error', () => {
    // arrange
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      params: { heroId: 666 },
    };
      // act
    getById(req, res);
    // assert
    expect(res.status).toHaveBeenCalledWith(404);
  });
});

describe('updateById', () => {
  test('shoud update one hero by id', () => {
    // arrange
    const res = {
      json: jest.fn(),
    };
    const req = {
      params: { heroId: 777 },
      body: { name: 'Gemmuki' },

    };
    // act
    updateById(req, res);
    // assert
    expect(res.json).toHaveBeenCalledWith([{ id: 777, name: 'Gemmuki' }, { id: 888, name: 'Maria' }]);
  });
});

describe('deleteById', () => {
  test('shoud get one hero by id', () => {
    // arrange
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };
    const req = {
      params: { heroId: 777 },
    };
      // act
    deleteById(req, res);
    // assert
    expect(res.json).toHaveBeenCalledWith([{ id: 888, name: 'Maria' }]);
  });

  test('shoud show an error', () => {
    // arrange
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      params: { heroId: 666 },
    };
      // act
    deleteById(req, res);
    // assert
    expect(res.status).toHaveBeenCalledWith(404);
  });
});
