const {
  getAll,
  getById,
  updateById,
  deleteById,
  createOne
} = require('./heroesController')();
const Hero = require('../model/heroModel');

jest.mock('../model/heroModel');

describe('createOne', () => {
  test('should send error', async () => {
    const req = {
      body: {}
    };

    const res = {
      json: jest.fn(),
      send: jest.fn()
    };

    Hero.mockRejectedValueOnce('error');
    await createOne(req, res);

    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('getAll', () => {
  test('shoud get all heroes', async () => {
    const res = {
      json: jest.fn()
    };
    Hero.find.mockResolvedValueOnce([{ name: 'Hedi' }]);

    await getAll(null, res);

    expect(res.json).toHaveBeenCalledWith([{ name: 'Hedi' }]);
  });
});

describe('getById', () => {
  test('should call json', async () => {
    const req = {
      params: {
        heroId: null
      }
    };
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };

    Hero.findById.mockResolvedValueOnce('hero with id 3');

    await getById(req, res);

    expect(res.json).toHaveBeenCalledWith('hero with id 3');
  });

  test('should call status 404', async () => {
    const req = {
      params: {
        heroId: null
      }
    };
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };

    Hero.findById.mockRejectedValueOnce(404);

    await getById(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
  });
});

describe('updateById', () => {
  test('should call json', async () => {
    const req = {
      params: {
        heroId: null
      },
      body: {}
    };
    const res = {
      json: jest.fn(),
      send: jest.fn()
    };

    await updateById(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call send error', async () => {
    const req = {
      params: {
        heroId: null
      },
      body: {}
    };
    const res = {
      json: jest.fn(),
      send: jest.fn()
    };

    Hero.findByIdAndUpdate.mockRejectedValueOnce('error');

    await updateById(req, res);

    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('deleteById', () => {
  test('should call status 204', async () => {
    const req = {
      params: {
        heroId: null
      }
    };
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };

    await deleteById(req, res);

    expect(res.status).toHaveBeenCalledWith(204);
  });

  test('should send error', async () => {
    const req = {
      params: {
        heroId: null
      }
    };
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };

    Hero.findByIdAndDelete.mockRejectedValueOnce('error');

    await deleteById(req, res);

    expect(res.send).toHaveBeenCalledWith('error');
  });
});
