const heroesController = require('./heroesController');

describe('When invoked a getAll function', () => {
  test('Should return an object with name Pepe', () => {
    // arrange
    const res = {
      json: jest.fn()
    };
    // act
    const { getAll } = heroesController;
    getAll(null, res);
    // assert
    expect(res.json).toHaveBeenCalled();
  });
});

test('Should return and object', () => {
  const res = {
    json: jest.fn()
  };
  const { createOne } = heroesController;
  createOne(null, res);
  expect(res.json).toHaveBeenCalled();
});
