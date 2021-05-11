const heroesController = require('./heroesController');

describe('When invoked a getAll function', () => {
  test('Should return an object with name Pepe', () => {
    // arrange
    const res = {
      json: jest.fn()
    };
    // act
    const { getAll } = heroesController;
    getAll(null, res);
    // assert
    expect(res.json).toHaveBeenCalled();
  });
});

test('Should return and object', () => {
  const req = {
    body: { name: 'Josep' }
  };
  const res = {
    json: jest.fn()
  };
  const { createOne } = heroesController;
  createOne(req, res);
  expect(res.json).toHaveBeenCalled();
});

test('Should return and hero Selected', () => {
  const req = {
    params: { heroId: 1 }
  };
  const res = {
    json: jest.fn(),
    status: jest.fn()
  };
  const { getById } = heroesController;
  getById(req, res);
  expect(res.json).toHaveBeenCalled();
});

test('Should test a fn updateById', () => {
  const req = {
    params: { heroId: 2 },
    body: { name: 'Josep' }
  };
  const res = {
    json: jest.fn()
  };
  const { updateById } = heroesController;
  updateById(req, res);
  expect(res.json).toHaveBeenCalled();
});
test('Should test a fn deleteById', () => {
  const res = {
    json: jest.fn(),
    status: jest.fn()
  };
  const req = {
    params: { body: { name: 'josep' } }
  };
  const { deleteById } = heroesController;
  deleteById(req, res);
  expect(res.json).toHaveBeenCalled();
});
