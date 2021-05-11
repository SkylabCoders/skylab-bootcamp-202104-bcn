const {
  getAll,
  createOne,
  getById,
  updateById,
  deleteById,
} = require('./heroesController')();

const Hero = require('../model/heroModel');

jest.mock('../model/heroModel');
describe('getAll', () => {
  test('shoud get all heroes', async () => {
    const res = {
      json: jest.fn(),
    };
    Hero.find.mockResolvedValueOnce([{ name: 'Pepe' }]);
    await getAll(null, res);
    expect(res.json).toHaveBeenCalledWith([{ name: 'Pepe' }]);
  });
});

describe('createOne', () => {
  class MockHero {
    constructor(name) {
      this.name = name;
    }

    // eslint-disable-next-line class-methods-use-this
    save() {}
  }
  test('should call json', async () => {
    const req = {
      body: null,
    };
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };

    const newHero = new MockHero('isabella');

    Hero.mockReturnValueOnce(newHero);
    await createOne(req, res);
    expect(res.json).toHaveBeenCalledWith({ name: 'isabella' });
  });

  test('should call error', async () => {
    const req = {
      body: null,
    };
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };

    Hero.mockReturnValueOnce({
      save: jest.fn().mockRejectedValueOnce('error'),
    });

    await createOne(req, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('getById', () => {
  test('shoud get one hero by id', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };
    const req = {
      params: { heroId: null },
    };
      // act
    Hero.findById.mockResolvedValueOnce({ id: 777, name: 'Isabel' });
    await getById(req, res);
    // assert
    expect(res.json).toHaveBeenCalledWith({ id: 777, name: 'Isabel' });
  });

  test('shoud show an error 404', async () => {
    // arrange
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      params: { heroId: null },
    };
    Hero.findById.mockRejectedValueOnce();

    await getById(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
  });
});

describe('updateById', () => {
  test('shoud update one hero by id', () => {
    // arrange
    const res = {
      json: jest.fn(),
    };
    const req = {
      params: { heroId: 777 },
      body: { name: 'Gemmuki' },

    };
    // act
    updateById(req, res);
    // assert
    expect(res.json).toHaveBeenCalledWith([{ id: 777, name: 'Gemmuki' }, { id: 888, name: 'Maria' }]);
  });
});

describe('deleteById', () => {
  test('shoud get one hero by id', () => {
    // arrange
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };
    const req = {
      params: { heroId: 777 },
    };
      // act
    deleteById(req, res);
    // assert
    expect(res.json).toHaveBeenCalledWith([{ id: 888, name: 'Maria' }]);
  });

  test('shoud show an error', () => {
    // arrange
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      params: { heroId: 666 },
    };
      // act
    deleteById(req, res);
    // assert
    expect(res.status).toHaveBeenCalledWith(404);
  });
});
