const heroesController = require('heroesController');

test('shoud get all heroes', () => {
  /*Arrange*/
  const res = {
    // espiar funciones
    json:jest.fn()
  };
  // expect
   const {getAll} = heroesController([{name: 'Pepe'}])
  getAll(null, res);
  // assert
  expect(res.json).toHaveBeenCalledWith([{name: 'Pepe'}])
})
