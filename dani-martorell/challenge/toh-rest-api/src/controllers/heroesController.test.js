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
  test('Should get a new hero', () => {
    // arrange
    const res = {
      json: jest.fn(),
    };
    const req = {
      body: { id: 2, name: 'Juan' },
    };

    // act
    const { createOne } = heroesController([{ id: 1, name: 'Pepe' }]);
    createOne(req, res);

    // assert
    expect(res.json).toHaveBeenCalledWith({ id: 2, name: 'Juan' });
  });

  test('Should get an invalid id message', () => {
    // arrange
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };

    const req = {
      body: { id: 1, name: 'Juan' },
    };

    // act
    const { createOne } = heroesController([{ id: 1, name: 'Pepe' }]);
    createOne(req, res);

    // assert
    expect(res.json).toHaveBeenCalledWith({ message: 'Invalid Id.' });
  });
});

describe('getById', () => {
  test('Should get a valid Id hero', () => {
    // arrange
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };

    const req = {
      params: heroId,
    };
    // act
    const { getById } = heroesController([{ id: 10, name: 'Samy' }, { id: 11, name: 'Davis' }]);
    getById(req, res);
  });
});
