const heroesController = require('./heroesController');

describe('getAll', () => {
  test('shoud get all heroes', () => {
    // arrange
    const res = {
      json: jest.fn(),
    };
    // act
    const { getAll } = heroesController();
    getAll(null, res);
    // assert
    expect(res.json).toHaveBeenCalledWith([
      { id: 1, name: 'Dr Nice' },
      { id: 2, name: 'Narco' },
      { id: 3, name: 'Bombasto' },
      { id: 4, name: 'Celeritas' },
      { id: 5, name: 'Magneta' },
      { id: 6, name: 'RubberMan' },
      { id: 7, name: 'Dynama' },
      { id: 8, name: 'Dr IQ' },
      { id: 9, name: 'Magma' },
      { id: 10, name: 'Tornado' },
    ]);
  });
  test('shoud create a hero', () => {
    // arrange
    const res = {
      json: jest.fn(),
    };
    const req = {
      body: { name: 'Pepe' },
    };
    // act
    const { createOne } = heroesController();
    createOne(req, res);
    // assert
    expect(res.json).toHaveBeenCalledWith({ id: 11, name: 'Pepe' });
  });
  test('shoud get a hero by id', () => {
    // arrange
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };
    const req = {
      params: { heroId: 2 },
    };
    // act
    const { getById } = heroesController();
    getById(req, res);
    // assert
    expect(res.json).toHaveBeenCalledWith({ id: 2, name: 'Narco' });
  });
  test('shoud get a hero by id', () => {
    // arrange
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };
    const req = {
      params: { heroId: 30 },
    };
    // act
    const { getById } = heroesController();
    getById(req, res);
    // assert
    expect(res.status).toHaveBeenCalledWith(404);
  });
});
