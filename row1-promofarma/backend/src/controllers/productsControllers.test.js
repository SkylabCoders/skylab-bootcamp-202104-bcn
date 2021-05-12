const {
  getAll,
  createOne,
  getById,
  updateById,
  deleteById
} = require('./productsControllers')();
const Product = require('../model/productModel');

jest.mock('../model/productModel');

describe('getAll', () => {
  test('Shoud get all products', async () => {
    const res = {
      json: jest.fn()
    };
    Product.find.mockResolvedValueOnce([{ productName: 'Patatas', stock: 100, price: 2 }]);

    await getAll(null, res);

    expect(res.json).toHaveBeenCalledWith([{ productName: 'Patatas', stock: 100, price: 2 }]);
  });
});

describe('createOne', () => {
    class MockProduct {
      constructor(name) {
        this.name = name;
      }
      save() {}
    }
  
    test('Should call json', async () => {
      const req = {
        body: null,
      };
      const res = {
        json: jest.fn(),
        send: jest.fn(),
      };
  
      const newProduct = new MockProduct('Product name');
  
      Product.mockReturnValueOnce(newProduct);
  
      await createOne(req, res);

      expect(res.json).toHaveBeenCalledWith({ name: 'Product name' });
    });
  
    test('Should call send', async () => {
      const req = {
        body: null,
      };
      const res = {
        json: jest.fn(),
        send: jest.fn(),
      };
  
      Product.mockReturnValueOnce({
        save: jest.fn().mockRejectedValueOnce('Error'),
      });
  
      await createOne(req, res);

      expect(res.send).toHaveBeenCalledWith('Error');
    });
  });

  describe('getById', () => {
    test('Should call res.status with 404', async () => {
      const res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn(),
      };
  
      const req = {
        params: {
            productId: null,
        },
      };
  
      Product.findById.mockRejectedValueOnce();
  
      await getById(req, res);
  
      expect(res.status).toHaveBeenCalledWith(404);
    });
  
    test('Should call res.send with error', async () => {
      const res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn(),
      };
  
      const req = {
        params: {
          Product: null,
        },
      };
  
      Product.findById.mockRejectedValueOnce('Error');
  
      await getById(req, res);
  
      expect(res.send).toHaveBeenCalledWith('Error');
    });
  
    test('Should call res.json ', async () => {
      const res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn(),
      };
  
      const req = {
        params: {
          Product: null,
        },
      };
  
      Product.findById.mockResolvedValueOnce('One product');
  
      await getById(req, res);
  
      expect(res.json).toHaveBeenCalledWith('One product');
    });
  });

  describe('updateById', () => {
    test('Should call res.json', async () => {
      const res = {
        json: jest.fn(),
        send: jest.fn(),
      };
  
      const req = {
        params: {
          productId: null,
        },
        body: {},
      };
  
      await updateById(req, res);
  
      expect(res.json).toHaveBeenCalled();
    });
  
    test('Should call res.send', async () => {
      const res = {
        json: jest.fn(),
        send: jest.fn(),
      };
  
      const req = {
        body: null,
        params: {
          productId: null,
        },
      };
  
      Product.findByIdAndUpdate.mockRejectedValueOnce('Error find product');
  
      await updateById(req, res);
  
      expect(res.send).toHaveBeenCalledWith('Error find product');
    });
  });

  describe('deleteById', () => {
    test('Should call json', async () => {
      const res = {
        status: jest.fn(),
        json: jest.fn(),
        send: jest.fn(),
      };
  
      const req = {
        params: {
          heroId: null,
        },
      };
  
      await deleteById(req, res);
  
      expect(res.json).toHaveBeenCalled();
    });
  
    test('Should call status with 204', async () => {
      const res = {
        status: jest.fn(),
        json: jest.fn(),
        send: jest.fn(),
      };
  
      const req = {
        params: {
          heroId: null,
        },
      };
  
      await deleteById(req, res);
  
      expect(res.status).toHaveBeenCalledWith(204);
    });
  
    test('Should fail and call res.send with error', async () => {
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
      Product.findByIdAndDelete.mockRejectedValueOnce('Error');
  
      await deleteById(req, res);
  
      expect(res.send).toHaveBeenCalledWith('Error');
    });
  });