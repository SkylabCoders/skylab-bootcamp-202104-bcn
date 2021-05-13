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

    Product.find.mockResolvedValue([{ name: 'cream' }]);

    await getAll(null, res);

    expect(res.json).toHaveBeenCalledWith([{ name: 'cream' }]);
  });
});

describe('createOne', () => {
  class MockProduct {
    constructor(name) {
      this.name = name;
    }

    // eslint-disable-next-line class-methods-use-this
    save() {}
  }
  const res = {
    status: jest.fn(),
    json: jest.fn(),
    send: jest.fn()
  };
  test('should create one product', async () => {
    const req = {
      body: {
        name: 'champu'
      }
    };
    const newProduct = new MockProduct('product name');
    Product.mockReturnValueOnce(newProduct);

    await createOne(req, res);

    expect(res.json).toHaveBeenCalledWith({ name: 'product name' });
  });
  test('should send error', async () => {
    const req = {
      body: null
    };

    Product.mockReturnValueOnce({ save: jest.fn().mockRejectedValueOnce('error') });

    await createOne(req, res);

    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('getById', () => {
  const res = {
    status: jest.fn(),
    json: jest.fn(),
    send: jest.fn()
  };
  test('should get a product by id', async () => {
    const req = {
      params: {
        productId: 1
      }
    };
    Product.findById.mockResolvedValue([{ productId: 1, name: 'cream' }]);

    await getById(req, res);

    expect(res.json).toHaveBeenCalledWith([{ productId: 1, name: 'cream' }]);
  });
  test('should get error', async () => {
    const req = {
      params: {
        productId: null
      }
    };

    Product.findById.mockRejectedValueOnce('error');

    await getById(req, res);

    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('updateById', async () => {
  const res = {
    status: jest.fn(),
    json: jest.fn(),
    send: jest.fn()
  };
  test('should updated info product by id', async () => {
    const req = {
      params: {
        productId: 1
      },
      body: {}
    };
    Product.findByIdAndUpdate.mockResolvedValue([{ productId: 1, name: 'cream' }]);

    await updateById(req, res);

    expect(res.json).toHaveBeenCalledWith([{ productId: 1, name: 'cream' }]);
  });
  test('should get error', async () => {
    const req = {
      params: {
        productId: null
      },
      body: {}
    };

    Product.findByIdAndUpdate.mockRejectedValueOnce('error');

    await updateById(req, res);

    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('deleteById', () => {
  const res = {
    status: jest.fn(),
    json: jest.fn(),
    send: jest.fn()
  };
  test('should delete product by id', async () => {
    const req = {
      params: {
        productId: null
      }
    };
    Product.findByIdAndDelete.mockResolvedValue();

    await deleteById(req, res);

    expect(res.json).toHaveBeenCalled();
  });
  test('should get error', async () => {
    const req = {
      params: {
        productId: null
      }
    };

    Product.findByIdAndDelete.mockRejectedValueOnce('error');

    await deleteById(req, res);

    expect(res.send).toHaveBeenCalledWith('error');
  });
});
