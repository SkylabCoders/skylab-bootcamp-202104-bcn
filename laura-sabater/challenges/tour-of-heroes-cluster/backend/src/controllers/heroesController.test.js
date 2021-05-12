/* eslint-disable no-undef */
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
    // arrange
    const res = {
      json: jest.fn(),
    };
    // act
    await getAll(null, res);
    // assert
    expect(res.json).toHaveBeenCalled();
  });
});

describe('createOne', () => {
  test('should return res.json', async () => {
    const req = {
      body: null,
    };
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    await createOne(req, res);
    expect(res.json).toHaveBeenCalled();
  });
  // test('should return res.send', async () => {
  //   const req = {
  //     body: null,
  //   };
  //   const res = {
  //     json: jest.fn(),
  //     send: jest.fn(),
  //   };
  //   newHero = {
  //     save: jest.fn(),
  //   };
  //   newHero.save().mockRejectedValueOnce('error');
  //   await createOne(req, res);
  //   expect(res.send).toHaveBeenCalled();
  // });
});
describe('getById', () => {
  test('should return res.json', async () => {
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
    await getById(req, res);

    expect(res.json).toHaveBeenCalled();
  });
  test('should return res.send', async () => {
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
    Hero.findById.mockRejectedValueOnce();
    await getById(req, res);
    expect(res.send).toHaveBeenCalled();
  });
});

describe('updateById', () => {
  test('should return res.json', async () => {
    const req = {
      params: {
        heroId: null,
      },
      body: null,
    };
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    await updateById(req, res);
    expect(res.json).toHaveBeenCalled();
  });
  test('should return res.send', async () => {
    const req = {
      params: {
        heroId: null,
      },
      body: null,
    };
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    Hero.findByIdAndUpdate.mockRejectedValueOnce();
    await updateById(req, res);
    expect(res.send).toHaveBeenCalled();
  });
});

describe('deleteById', () => {
  test('should return res.json', async () => {
    const req = {
      params: {
        heroId: null,
      },
    };
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn(),
    };
    await deleteById(req, res);
    expect(res.json).toHaveBeenCalled();
  });
  test('should return res.send', async () => {
    const req = {
      params: {
        heroId: null,
      },
    };
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn(),
    };
    Hero.findByIdAndDelete.mockRejectedValueOnce();
    await deleteById(req, res);
    expect(res.send).toHaveBeenCalled();
  });
});
