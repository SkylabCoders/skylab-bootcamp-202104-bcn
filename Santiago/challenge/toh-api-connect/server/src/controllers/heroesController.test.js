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

describe('createOne', () => {
  test('shoud create one heroe', () => {
    // arrange
    const req = {
      body: { id: 10, name: 'hedi' }
    };

    const res = {
      json: jest.fn()
    };

    // act
    const { createOne } = heroesController([]);
    createOne(req, res);

    // assert
    expect(res.json).toHaveBeenCalledWith([{ id: 10, name: 'hedi' }]);
  });
});

describe('getById', () => {
  test('shoud get a hero', () => {
    // arrange
    const req = {
      params: { heroId: 10 }
    };

    const res = {
      json: jest.fn(),
      status: jest.fn()
    };

    // act
    const { getById } = heroesController([{ id: 10, name: 'hedi' }, { id: 11, name: 'eude' }]);
    getById(req, res);

    // assert
    expect(res.json).toHaveBeenCalledWith({ id: 10, name: 'hedi' });
  });
});

describe('updateById', () => {
  test('shoud update a hero', () => {
    // arrange
    const req = {
      params: { heroId: 10 },
      body: { name: 'pipo' }
    };

    const res = {
      json: jest.fn(),
      status: jest.fn()
    };

    // act
    const { updateById } = heroesController([{ id: 10, name: 'hedi' }, { id: 11, name: 'eude' }]);
    updateById(req, res);

    // assert
    expect(res.json).toHaveBeenCalledWith([{ id: 10, name: 'pipo' }, { id: 11, name: 'eude' }]);
  });
});

describe('deleteById', () => {
  test('shoud delete a hero', () => {
    // arrange
    const req = {
      params: { heroId: 10 }
    };

    const res = {
      json: jest.fn(),
      status: jest.fn()
    };

    // act
    const { deleteById } = heroesController([{ id: 10, name: 'hedi' }, { id: 11, name: 'eude' }]);
    deleteById(req, res);

    // assert
    expect(res.json).toHaveBeenCalledWith([{ id: 11, name: 'eude' }]);
  });
});
