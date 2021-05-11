const heroesController = require('./heroesController');

describe('getAll', () => {
  test('shoud get all heroes', () => {
    // arrange
    const res = {
      json: jest.fn()
    };

    // act
    const { getAll } = heroesController([{ name: 'Pepe' }]);
    getAll(null, res);

    // assert
    expect(res.json).toHaveBeenCalledWith([{ name: 'Pepe' }]);
  });
  test('shoud get hero by Id', () => {
    // arrange
    const res = {
      json: jest.fn()
    };

    // act
    const { getHeroById } = heroesController([{ id: 1 }]);
    getHeroById(null, res);

    // assert
    expect(res.json).toHaveBeenCalledWith([{ id: 1 }]);
  });
});
