const heroesController = require('./heroesController');

describe('getAll', () => {
  test('Shoud get all heroes', () => {
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
  test('Should create a hero', () => {
    const res = {
      json: jest.fn(),
    };

    const { createOne } = heroesController([{ name: 'Pepe' }, { name: 'Juan' }]);
    createOne(null, res);

    expect(res.json).toHaveBeenCalledWith({ name: 'Pepe' });
  });
});

describe('getById', () => {
  test('Should print a hero by its id', () => {
    const res = {
      json: jest.fn(),
    };

    const { getById } = heroesController([{ name: 'Pepe' }, { name: 'Juan' }]);
    getById(null, res);

    expect(res.json).toHaveBeenCalledWith({ name: 'Pepe' });
  });
});

describe('updateById', () => {
  test('Should update the array with a new element', () => {
    const req = {
      params: { heroId: 2 },
      body: 'Lola',
    };
    const res = {
      json: jest.fn(),
    };

    const { updateById } = heroesController([{ name: 'Pepe' }, { name: 'Juan' }]);
    updateById(req, res);

    expect(res.json).toHaveBeenCalledWith([{ name: 'Pepe' }, { name: 'Juan' }, { id: 2, name: 'Lola' }]);
  });
});

describe('deleteById', () => {
  test('Should delete a hero by Id', () => {
    const req = {
      params: { heroId: 3 },
    };
    const res = {
      json: jest.fn(),
    };

    const { deleteById } = heroesController([{ id: 1, name: 'Pepe' }, { id: 2, name: 'Juan' }, { id: 3, name: 'Lola' }]);
    deleteById(req, res);

    expect(res.json).toHaveBeenCalledWith([{ id: 1, name: 'Pepe' }, { id: 2, name: 'Juan' }]);
  });
});
