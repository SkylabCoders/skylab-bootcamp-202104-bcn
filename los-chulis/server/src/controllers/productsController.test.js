const {
  getAllProducts,
  createOne,
  updateById,
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
      send: jest.fn(),
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

describe('updateById', () => {
  test('should update one product', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      params: {
        productId: null,
      },
      body: null,
    };
    await updateById(req, res);
    expect(res.json).toHaveBeenCalled();
  });
  test('should send an error', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      params: {
        productId: null,
      },
      body: null,
    };
    Product.findByIdAndUpdate.mockRejectedValueOnce('error');
    await updateById(req, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});
