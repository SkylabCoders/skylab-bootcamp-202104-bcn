const {
  getAllProducts,
  createOne,
} = require('./productsController')();
const Product = require('../model/productModel');

jest.mock('../model/productModel');

describe('getAllProducts', () => {
  test('shoud get all products', async () => {
    // arrange
    const res = {
      json: jest.fn(),
    };
    Product.find.mockResolvedValueOnce([{ name: 'Pepe' }]);

    // act
    await getAllProducts(null, res);

    // assert
    expect(res.json).toHaveBeenCalledWith([{ name: 'Pepe' }]);
  });
});

describe('createOne', () => {
  test('shoud create one product', async () => {
    // arrange
    const res = {
      json: jest.fn(),
    };
    const req = {
      body: null,
    };

    // act
    await createOne(req, res);

    // assert
    expect(res.json).toHaveBeenCalled();
  });

  test('should send error', async () => {
    // arrange
    const res = {
      json: jest.fn(),
    };
    const req = {
      body: null,
    };
    Product.mockReturnValueOnce({
      save: jest.fn().mockRejectedValueOnce('error'),
    });

    // act
    await createOne(req, res);

    // assert
    expect(res.send).toHaveBeenCalledWith('error');
  });
});
