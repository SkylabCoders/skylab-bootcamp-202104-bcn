/* eslint-disable class-methods-use-this */
const { getAll, addOneToStock } = require('./productsController')();
const Product = require('../model/productModel');

jest.mock('../model/productModel');

describe('Given a getAll function', () => {
  test('Should respond with status 200', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };
    Product.find.mockResolvedValueOnce(200);

    await getAll(null, res);

    expect(res.status).toHaveBeenCalledWith(200);
  });

  test('Should respond with products json', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };
    Product.find.mockResolvedValueOnce([{}]);

    await getAll(null, res);

    expect(res.json).toHaveBeenCalledWith([{}]);
  });

  test('Should respond with error', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };
    Product.find.mockRejectedValueOnce('error');

    await getAll(null, res);

    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('Given a add one to stock function', () => {
  test('Should respond with status 200', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };

    const req = {
      params: {
        productId: 3
      }
    };

    Product.findByIdAndUpdate.mockResolvedValueOnce();

    await addOneToStock(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
  });

  test('Should respond with product', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };

    const req = {
      params: {
        productId: 3
      }
    };

    Product.findByIdAndUpdate.mockResolvedValueOnce({ fredy: 'si' });

    await addOneToStock(req, res);

    expect(res.json).toHaveBeenCalledWith({ fredy: 'si' });
  });

  test('Should respond with error', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };

    const req = {
      params: {
        productId: 3
      }
    };

    Product.findByIdAndUpdate.mockRejectedValueOnce('error');

    await addOneToStock(req, res);

    expect(res.send).toHaveBeenCalledWith('error');
  });
});
