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
});
