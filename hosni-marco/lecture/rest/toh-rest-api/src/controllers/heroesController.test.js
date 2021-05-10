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
  test('shoud get all heroes', () => {
    // arrange
    const res = {
      json: jest.fn(),
    };
    // act
    const { createOne } = heroesController([{ id: 20, name: 'Pepe' }]);
    createOne(null, res);
    // assert
    expect(res.json).toHaveBeenCalledWith({ id: 20, name: 'Pepe' });
  });
});