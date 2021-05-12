const {
  getAll
} = require('./productsControllers')();
const Product = require('../model/productModel');

jest.mock('../model/productModel');

describe('getAll', () => {
  test('shoud get all products', async () => {
    const res = {
      json: jest.fn()
    };
    Product.find.mockResolvedValueOnce([{ productName: 'Patatas', stock: 100, price: 2 }]);

    await getAll(null, res);

    expect(res.json).toHaveBeenCalledWith([{ productName: 'Patatas', stock: 100, price: 2 }]);
  });
});
