const heroesController = require('./heroesController');
const { getNextId } = require('../helpers/index');

describe('getAll', () => {
  test('shoud get all heroes', () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };

    const { getAll } = heroesController([{ name: 'Pepe' }]);
    getAll(null, res);
    expect(res.json).toHaveBeenCalledWith([{ name: 'Pepe' }]);
  });

  test('shoud return status 200', () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };

    const { getAll } = heroesController([{ name: 'Pepe' }]);
    getAll(null, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });
});

describe('createOne', () => {
  test('shoud create one hero', () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };

    const req = {
      body: {
        name: 'Elvis',
      },
    };

    const { createOne } = heroesController([{ name: 'Pepe' }]);
    createOne(req, res);
    expect(res.json).toHaveBeenCalledWith({ id: getNextId(), name: 'Elvis' });
  });
  test('shoud return status 201', () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };

    const req = {
      body: {
        name: 'Elvis',
      },
    };

    const { createOne } = heroesController([{ name: 'Pepe' }]);
    createOne(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
  });
});

describe('getById', () => {
  test('shoud return a Hero with the selected id', () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };

    const req = {
      params: { heroId: 2 },
    };

    const { getById } = heroesController([{ id: 1, name: 'Pepe' }, { id: 2, name: 'Tino' }]);
    getById(req, res);
    expect(res.json).toHaveBeenCalledWith({ id: 2, name: 'Tino' });
  });
  test('shoud return status 200', () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };

    const req = {
      params: { heroId: 2 },
    };

    const { getById } = heroesController([{ id: 1, name: 'Pepe' }, { id: 2, name: 'Tino' }]);
    getById(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });
  test('shoud return a Hero without argument', () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };

    const req = {
      params: { heroId: 7 },
    };

    const { getById } = heroesController([{ id: 1, name: 'Pepe' }, { id: 2, name: 'Tino' }]);
    getById(req, res);
    expect(res.json).toHaveBeenCalledWith();
  });
  test('shoud return status 404', () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };

    const req = {
      params: { heroId: 4 },
    };

    const { getById } = heroesController([{ id: 1, name: 'Pepe' }, { id: 2, name: 'Tino' }]);
    getById(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });
});

describe('updateById', () => {
  test('shoud return an array with the updated heroes', () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };

    const req = {
      body: { name: 'Josep' },
      params: { heroId: 2 },
    };

    const { updateById } = heroesController([{ id: 1, name: 'Pepe' }, { id: 2, name: 'Tino' }]);
    updateById(req, res);
    expect(res.json).toHaveBeenCalledWith([{ id: 1, name: 'Pepe' }, { id: 2, name: 'Josep' }]);
  });
  test('shoud return status 200', () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };

    const req = {
      params: { heroId: 2 },
    };

    const { updateById } = heroesController([{ id: 1, name: 'Pepe' }, { id: 2, name: 'Tino' }]);
    updateById(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });
});

describe('deleteById', () => {
  test('shoud return an array with the updated heroes', () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };

    const req = {
      params: { heroId: 2 },
    };

    const { deleteById } = heroesController([{ id: 1, name: 'Pepe' }, { id: 2, name: 'Tino' }]);
    deleteById(req, res);
    expect(res.json).toHaveBeenCalledWith([{ id: 1, name: 'Pepe' }]);
  });
  test('shoud return status 200', () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };

    const req = {
      params: { heroId: 2 },
    };

    const { deleteById } = heroesController([{ id: 1, name: 'Pepe' }, { id: 2, name: 'Tino' }]);
    deleteById(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });
  test('shoud return status 404', () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };

    const req = {
      params: { heroId: 90 },
    };

    const { deleteById } = heroesController([{ id: 1, name: 'Pepe' }, { id: 2, name: 'Tino' }]);
    deleteById(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });
});
