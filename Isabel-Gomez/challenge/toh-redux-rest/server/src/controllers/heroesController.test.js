/* eslint-disable no-console */
const heroesController = require('./heroesController');

describe('getAll', () => {
  test('shoud get all heroes', () => {
    // arrange
    const res = {
      json: jest.fn(),
    };
    // act
    const { getAll } = heroesController([{ name: 'Pepe' }]);
    getAll(null, res);
    // assert
    expect(res.json).toHaveBeenCalledWith([{ name: 'Pepe' }]);
  });
});

describe('createOne', () => {
  test('shoud create one heroe', () => {
    // arrange
    const req = { body: { name: 'Lola' } };
    const res = {
      json: jest.fn(),
    };
    // act
    const { createOne } = heroesController([{ name: 'Pepe' }]);
    createOne(req, res);
    // assert
    expect(res.json).toHaveBeenCalledWith([{ name: 'Pepe' }, { name: 'Lola' }]);
  });
});

describe('getById', () => {
  test('shoud show one heroe selected by Id', () => {
    // arrange
    const req = { params: { heroId: 1 } };
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };
    // act
    const { getById } = heroesController([{ id: 1, name: 'Pepe' }, { id: 2, name: 'Lola' }]);
    getById(req, res);
    // assert
    expect(res.json).toHaveBeenCalledWith({ id: 1, name: 'Pepe' });
  });
});

describe('updateById', () => {
  test('shoud update one heroe by Id', () => {
    // arrange
    const req = {
      params: { heroId: 1 },
      body: { name: 'Josep' },
    };
    const res = {
      json: jest.fn(),
    };
    // act
    const { updateById } = heroesController([{ id: 1, name: 'Pepe' }, { id: 2, name: 'Lola' }]);
    updateById(req, res);
    // assert
    expect(res.json).toHaveBeenCalledWith([{ id: 1, name: 'Josep' }, { id: 2, name: 'Lola' }]);
  });
});

describe('deleteById', () => {
  test('shoud delete one heroe by Id', () => {
    // arrange
    const req = { params: { heroId: 1 } };
    const res = {
      json: jest.fn(),
    };
    // act
    const { deleteById } = heroesController([{ id: 1, name: 'Pepe' }, { id: 2, name: 'Lola' }]);
    deleteById(req, res);
    // assert
    expect(res.json).toHaveBeenCalledWith([{ id: 2, name: 'Lola' }]);
  });
});
