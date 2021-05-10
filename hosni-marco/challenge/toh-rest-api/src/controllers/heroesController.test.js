const heroesController = require('./heroesController');

describe('getAll', () => {
  test('shoud get all heroes', () => {
    // arrange
    const res = { json: jest.fn() };
    // act
    const { getAll } = heroesController([{ name: 'Pepe' }]);
    getAll(null, res);
    // assert
    expect(res.json).toHaveBeenCalledWith([{ name: 'Pepe' }]);
  });
});

describe('createOne', () => {
  test('shoud add hero', () => {
    // arrange
    const req = { body: { name: 'melon' } };
    const res = { json: jest.fn() };
    // act
    const { createOne } = heroesController([{ name: 'Pepe' }]);
    createOne(req, res);
    // assert
    expect(res.json).toHaveBeenCalledWith([{ name: 'Pepe' }, { name: 'melon' }]);
  });
});

describe('getById', () => {
  test('shoud get hero by id', () => {
    // arrange
    const req = { params: { heroId: 1 } };
    const res = {
      json: jest.fn(),
      status: jest.fn()
    };
    // act
    const { getById } = heroesController([{ id: 1, name: 'Pepe' }, { id: 2, name: 'melon' }]);
    getById(req, res);
    // assert
    expect(res.json).toHaveBeenCalledWith({ id: 1, name: 'Pepe' });
  });

  test('shoud return undefined', () => {
    // arrange
    const req = { params: { heroId: false } };
    const res = {
      json: jest.fn(),
      status: jest.fn()
    };
    // act
    const { getById } = heroesController([{ id: 1, name: 'Pepe' }, { id: 2, name: 'melon' }]);
    getById(req, res);
    // assert
    expect(res.json).toHaveBeenCalledWith(undefined);
  });
});

describe('updateById', () => {
  test('shoud update hero by id', () => {
    // arrange
    const req = {
      body: { id: 1, name: 'sandia' },
      params: { heroId: 1 }
    };
    const res = {
      json: jest.fn(),
      status: jest.fn()
    };
    // act
    const { updateById } = heroesController([{ id: 1, name: 'Pepe' }, { id: 2, name: 'melon' }]);
    updateById(req, res);
    // assert
    expect(res.json).toHaveBeenCalledWith([{ id: 1, name: 'sandia' }, { id: 2, name: 'melon' }]);
  });
});

describe('deleteById', () => {
  test('shoud delete hero by id', () => {
    // arrange
    const req = { params: { heroId: 1 } };
    const res = { json: jest.fn() };
    // act
    const { deleteById } = heroesController([{ id: 1, name: 'Pepe' }, { id: 2, name: 'melon' }]);
    deleteById(req, res);
    // assert
    expect(res.json).toHaveBeenCalledWith([{ id: 2, name: 'melon' }]);
  });
});
