const {
  getAll,
  getById,
  createOne,
  updateById,
  deleteById,
} = require('./heroesController')();
const Hero = require('../model/hero.model');

jest.mock('../model/hero.model');

describe('getAll', () => {
  test('should get all heroes', async () => {
    // arrange
    const res = {
      json: jest.fn(),
    };
    Hero.find.mockResolvedValueOnce({ name: 'Hola' });
    // act
    await getAll(null, res);
    // assert
    expect(res.json).toHaveBeenCalledWith({ name: 'Hola' });
  });
});

describe('getById', () => {
  test('should get a hero by id', async () => {
    const req = {
      params: {
        heroId: null,
      },
    };
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
    Hero.findById.mockResolvedValueOnce('heroe');
    await getById(req, res);
    expect(res.json).toHaveBeenCalledWith('heroe');
  });
  test('should get a error 404', async () => {
    const req = {
      params: {
        heroId: null,
      },
    };
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
    Hero.findById.mockRejectedValueOnce(404);
    await getById(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });
});

describe('createOne', () => {
  test('should create a hero', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      body: null,
    };
    await createOne(req, res);
    expect(res.json).toHaveBeenCalled();
  });
  test('should call send', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      body: null,
    };
    Hero.mockReturnValueOnce({
      save: jest.fn().mockRejectedValueOnce('error'),
    });
    await createOne(req, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('updateById', () => {
  test('should update a hero by id', async () => {
    const res = {
      send: jest.fn(),
      json: jest.fn(),
    };
    const req = {
      params: {
        heroId: null,
      },
      body: {},
    };
    Hero.findByIdAndUpdate.mockResolvedValueOnce();
    await updateById(req, res);
    expect(res.json).toHaveBeenCalled();
  });
  test('should send error', async () => {
    const res = {
      send: jest.fn(),
      json: jest.fn(),
    };
    const req = {
      params: {
        heroId: null,
      },
      body: {},
    };
    Hero.findByIdAndUpdate.mockRejectedValueOnce('error');
    await updateById(req, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('deleteById', () => {
  test('should delete a hero by id', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      params: {
        heroId: null,
      },
    };
    await deleteById(req, res);
    expect(res.json).toHaveBeenCalled();
  });
  test('should send error', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      params: {
        heroId: null,
      },
    };
    Hero.findByIdAndDelete.mockRejectedValueOnce('error');
    await deleteById(req, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});
