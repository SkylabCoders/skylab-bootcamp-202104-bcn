const {
  getAll,
  getById
} = require('./heroesController')();
const Hero = require('../model/heroModel');

jest.mock('../model/heroModel');

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

  });
});
