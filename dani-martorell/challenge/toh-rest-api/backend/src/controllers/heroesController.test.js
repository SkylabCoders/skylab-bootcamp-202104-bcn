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
  test('Should return a list with new hero', () => {
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
    expect(res.json).toHaveBeenCalledWith([{ id: 1, name: 'Pepe' }, { id: 2, name: 'Juan' }]);
  });

  test('Should return an invalid id message', () => {
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
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: 'Invalid Id.' });
  });
});

describe('getById', () => {
  test('Should return a valid Id hero', () => {
    // arrange
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };

    const req = {
      params: { heroId: 10 },
    };
    // act
    const { getById } = heroesController([{ id: 10, name: 'Samy' }, { id: 11, name: 'Davis' }]);
    getById(req, res);
    // assert
    expect(res.json).toHaveBeenCalledWith({ id: 10, name: 'Samy' });
  });

  test('Should return an invalid id message', () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };
    const req = {
      params: { heroId: 12 },
    };
    const { getById } = heroesController([{ id: 10, name: 'Samy' }, { id: 11, name: 'Davis' }]);
    getById(req, res);
    expect(res.json).toHaveBeenCalledWith({ message: 'Invalid Id.' });
    expect(res.status).toHaveBeenCalledWith(404);
  });
});

describe('deleteById', () => {
  test('Should return a list of heroes without the deleted hero', () => {
    // arrange
    const req = {
      params: { heroId: 10 },
    };
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };
    // act
    const { deleteById } = heroesController([{ id: 10, name: 'Samy' }, { id: 11, name: 'Davis' }]);
    deleteById(req, res);
    // assert
    expect(res.json).toHaveBeenCalledWith([{ id: 11, name: 'Davis' }]);
  });
  test('Should return an invalid id message', () => {
    // arrange
    const req = {
      params: { heroId: 30 },
    };
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };
    // act
    const { deleteById } = heroesController([{ id: 10, name: 'Samy' }, { id: 11, name: 'Davis' }]);
    deleteById(req, res);
    // assert
    expect(res.json).toHaveBeenCalledWith({ message: 'Invalid Id.' });
    expect(res.status).toHaveBeenCalledWith(404);
  });
});

describe('updateById', () => {
  test('Should return a list of heroes with updated heroe', () => {
    // arrange
    const req = {
      params: { heroId: 10 },
      body: { name: 'Pepe', age: 30 },
    };
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };
      // act
    const { updateById } = heroesController([{ id: 10, name: 'Samy' }, { id: 11, name: 'Davis' }]);
    updateById(req, res);
    // assert
    expect(res.json).toHaveBeenCalledWith([{ id: 10, name: 'Pepe', age: 30 }, { id: 11, name: 'Davis' }]);
  });
  test('Should return an invalid id message', () => {
    // arrange
    const req = {
      params: { heroId: 30 },
      body: { name: 'Pepe', age: 30 },
    };
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };
    // act
    const { updateById } = heroesController([{ id: 10, name: 'Samy' }, { id: 11, name: 'Davis' }]);
    updateById(req, res);
    // assert
    expect(res.json).toHaveBeenCalledWith({ message: 'Invalid Id.' });
    expect(res.status).toHaveBeenCalledWith(404);
  });
});
