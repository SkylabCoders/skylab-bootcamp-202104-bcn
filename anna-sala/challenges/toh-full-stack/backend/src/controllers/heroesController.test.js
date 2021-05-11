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
    expect(res.json).toHaveBeenCalled();
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
      params: { heroId: 5 },
    };
      // act
    const { getById } = heroesController();
    getById(req, res);

    // assert
    expect(res.json).toHaveBeenCalled();
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
      params: { heroId: 5 },
      body: { id: 20, name: 'Anna' },
    };
    // act
    const { updateById } = heroesController();
    updateById(req, res);

    // assert
    expect(res.json).toHaveBeenCalledWith([{ id: 20, name: 'Anna' }]);
  });
});
