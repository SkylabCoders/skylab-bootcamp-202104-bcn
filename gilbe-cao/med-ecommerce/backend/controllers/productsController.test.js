const {
  get,
  post,
  put,
} = require('./productsController');
const Product = require('../models/productModel');

jest.mock('../models/productModel');

describe('get', () => {
  test('should call status with 500', async () => {
    const req = {
      body: null,
    };

    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };

    Product.find.mockRejectedValueOnce();

    await get(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
  });

  test('should call json', async () => {
    const req = {
      body: null,
    };

    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };

    await get(req, res);
    expect(res.json).toHaveBeenCalled();
  });
});

describe('post', () => {
  test('should call status with 500', async () => {
    const req = {
      body: null,
    };

    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };

    Product.mockImplementationOnce(() => ({
      save: jest.fn().mockRejectedValueOnce(),
    }));

    await post(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
  });

  test('should call json', async () => {
    const req = {
      body: null,
    };

    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };

    await post(req, res);
    expect(res.json).toHaveBeenCalled();
  });
});

describe('put', () => {
  test('should call status with 500', async () => {
    const req = {
      body: {
        maps: jest.fn().mockRejectedValueOnce(),
      },
    };

    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };

    await put(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
  });

  test('should call json', async () => {
    const req = {
      body: [
        {
          _id: '',
          totalItems: 1,
        },
      ],
    };

    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };

    await put(req, res);
    expect(res.json).toHaveBeenCalled();
  });
});
