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
  test('shoud create one hero', () => {
    // arrange
    const res = {
      json: jest.fn(),
    };
    const req = {
      body: { id: 666, name: 'Pepe' },
    };
    // act
    const { createOne } = heroesController([{ id: 777, name: 'Maria' }]);
    createOne(req, res);
    // assert
    expect(res.json).toHaveBeenCalledWith([{ id: 777, name: 'Maria' }, { id: 666, name: 'Pepe' }]);
  });
});
