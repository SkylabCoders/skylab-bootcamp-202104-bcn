const heroesController = require('./heroesController');

describe('given a getAll controller', () => {
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
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' },
    ]);
  });
});

describe('given a createOne controller', () => {
  test('shoud create a hero', () => {
    // arrange
    const res = {
      json: jest.fn(),
    };
    const req = {
      body: { id: 20, name: 'Anna' },
    };
      // act
    const { createOne } = heroesController();
    createOne(req, res);

    // assert
    expect(res.json).toHaveBeenCalledWith({ id: 20, name: 'Anna' });
  });
});

describe('given a getById controller', () => {
  test('shoud get one hero', () => {
    // arrange
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };
    const req = {
      params: { heroId: 11 },
    };
      // act
    const { getById } = heroesController();
    getById(req, res);

    // assert
    expect(res.json).toHaveBeenCalledWith({ id: 11, name: 'Dr Nice' });
  });
  test('shoud not get one hero', () => {
    // arrange
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };
    const req = {
      params: { heroId: 9 },
    };
      // act
    const { getById } = heroesController();
    getById(req, res);

    // assert
    expect(res.status).toHaveBeenCalledWith(404);
  });
});

describe('given a updateById controller', () => {
  test('shoud update selected hero', () => {
    // arrange
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };
    const req = {
      params: { heroId: 20 },
      body: { id: 20, name: 'Anna' },
    };
    // act
    const { updateById } = heroesController();
    updateById(req, res);

    // assert
    expect(res.json).toHaveBeenCalledWith({ id: 20, name: 'Anna' });
  });
});

describe('given a deleteById controller', () => {
  test('shoud delete selected hero', () => {
    // arrange
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };
    const req = {
      params: { heroId: 20 },
    };
    // act
    const { deleteById } = heroesController();
    deleteById(req, res);

    // assert
    expect(res.json).toHaveBeenCalledWith([
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' }]);
  });
  test('shoud delete selected hero', () => {
    // arrange
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      params: { heroId: 22 },
    };
    // act
    const { deleteById } = heroesController();
    deleteById(req, res);

    // assert
    expect(res.status).toHaveBeenCalledWith(404);
  });
});
