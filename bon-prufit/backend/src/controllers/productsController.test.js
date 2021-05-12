/* eslint-disable class-methods-use-this */
const { getAll } = require('./productsController')();
const Product = require('../model/productModel');

jest.mock('../model/productModel');

describe('Given a getAll function', () => {
  test('Should respond with status 200', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };
    // const products = new Product();
    Product.find.mockResolvedValueOnce(200);

    await getAll(null, res);

    expect(res.status).toHaveBeenCalledWith(200);
  });
});
