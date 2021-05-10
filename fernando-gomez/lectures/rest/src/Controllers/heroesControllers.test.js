const heroesController = require('./heroesController');

test('Should get all heroes', () => {
  // arrange
  const res = {
    json: jest.fn(),
  };
  // act
  const { getAll } = heroesController([{ name: 'pepe' }]);
  getAll(null, res);

  // assert
  expect(res.json).toHaveBeenCalledWith([{ name: 'pepe' }]);
});
