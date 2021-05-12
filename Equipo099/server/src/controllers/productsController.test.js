const {
  getAll,
  createOne,
  getById,
  updateById,
  deleteById
} = require('./productsController')();
const Product = require('../model/productModel');

jest.mock('../model/productModel');

describe('getAll', () => {
  test('should getAll products', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn()
    };

    Product.find.mockResolvedValue();

    await getAll(null, res);

    expect(res.json).toHaveBeenCalled();
  });
});

describe('createOne', () => {
  test('should create one product', async () => {

  });
});
