const heroesController = require('./heroesController');

describe('getAll', () => {
  test('shoud get all heroes', () => {
    // arrange
    const res = {
      json: jest.fn(),
      status: jest.fn()
    };

    // act
    const { getAll } = heroesController([{ name: 'Pepe' }]);
    getAll(null, res);

    // assert
    expect(res.json).toHaveBeenCalledWith([{ name: 'Pepe' }]);
  });

  test('shoud return status 200', () => {
    // arrange
    const res = {
      json: jest.fn(),
      status: jest.fn()
    };

    // act
    const { getAll } = heroesController([{ name: 'Pepe' }]);
    getAll(null, res);

    // assert
    expect(res.status).toHaveBeenCalledWith(200);
  });
});

describe('createOne', () => {
  test('shoud get a new hero', () => {
    // arrange
    const res = {
      json: jest.fn(),
      status: jest.fn()

    };
    const req = {
      body: {
        id: 15,
        name: 'Dr Caca'
      }
    };

    // act
    const { createOne } = heroesController([{ id: 14, name: 'Ramon' }]);
    createOne(req, res);

    // assert
    expect(res.json).toHaveBeenCalledWith([{ id: 14, name: 'Ramon' }, { id: 15, name: 'Dr Caca' }]);
  });
});

describe('getById', () => {
  test('shoud get a hero by Id', () => {
    // arrange
    const res = {
      json: jest.fn(),
      status: jest.fn()
    };
    const req = { params: { heroId: 5 } };

    // act
    const { getById } = heroesController([{ id: 5, name: 'Cacho' }]);
    getById(req, res);

    // assert
    expect(res.json).toHaveBeenCalledWith({ id: 5, name: 'Cacho' });
  });

  test('shoud resolve as 404', () => {
    // arrange
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      end: jest.fn()
    };
    const req = { params: { heroId: 15 } };

    // act
    const { getById } = heroesController([{ id: 5, name: 'Cacho' }]);
    getById(req, res);

    // assert
    expect(res.status).toHaveBeenCalledWith(404);
  });
});

describe('updateById', () => {
  test('shoud update hero name', () => {
    // arrange
    const res = {
      json: jest.fn(),
      status: jest.fn()
    };
    const req = {
      body: { name: 'Dr Caca' },
      params: { heroId: 5 }
    };

    // act
    const { updateById } = heroesController([{ id: 5, name: 'Cacho' }]);
    updateById(req, res);

    // assert
    expect(res.json).toHaveBeenCalledWith([{ id: 5, name: 'Dr Caca' }]);
  });
  test('shoud resolve as 404', () => {
    // arrange
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      end: jest.fn()
    };
    const req = { params: { heroId: 15 } };

    // act
    const { updateById } = heroesController([{ id: 5, name: 'Cacho' }]);
    updateById(req, res);

    // assert
    expect(res.status).toHaveBeenCalledWith(404);
  });
});

describe('deleteById', () => {
  test('shoud delete a hero', () => {
    // arrange
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      
    };
    const req = {
      params: { heroId: 5 }
    };

    // act
    const { deleteById } = heroesController([{ id: 5, name: 'Cacho' }]);
    deleteById(req, res);

    // assert
    expect(res.json).toHaveBeenCalledWith([]);
  });
  test('shoud resolve as 404', () => {
    // arrange
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      end: jest.fn()
    };
    const req = { params: { heroId: 15 } };

    // act
    const { deleteById } = heroesController([{ id: 5, name: 'Cacho' }]);
    deleteById(req, res);

    // assert
    expect(res.status).toHaveBeenCalledWith(404);
  });
});
