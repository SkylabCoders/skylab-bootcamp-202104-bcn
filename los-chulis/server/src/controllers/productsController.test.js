const {
  getAllProducts,
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
