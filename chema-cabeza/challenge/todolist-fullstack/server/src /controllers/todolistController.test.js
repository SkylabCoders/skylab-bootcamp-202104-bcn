const {
  getAll,
  createOne,
  updateById,
  deleteById,
} = require('./todolistController')();

const List = require('../model/todolistModel');

jest.mock('../model/todolistModel');

describe('getAll', () => {
  test('shoud get all heroes', async () => {
    const res = {
      json: jest.fn(),
    };
    List.find.mockResolvedValueOnce([{ name: 'Pepe' }]);

    await getAll(null, res);

    expect(res.json).toHaveBeenCalledWith([{ name: 'Pepe' }]);
  });

  describe('createOne', () => {
    class MockTask {
      constructor(name) {
        this.name = name;
      }

      // eslint-disable-next-line class-methods-use-this
      save() {}
    }

    test('should call json', async () => {
      // arrange
      const req = {
        body: null,
      };
      const res = {
        json: jest.fn(),
        send: jest.fn(),
      };

      const newHero = new MockTask('task name');

      List.mockReturnValueOnce(newHero);

      // act
      await createOne(req, res);
      // assert
      expect(res.json).toHaveBeenCalledWith({ name: 'task name' });
    });

    test('should call send', async () => {
      // arrange
      const req = {
        body: null,
      };
      const res = {
        json: jest.fn(),
        send: jest.fn(),
      };

      List.mockReturnValueOnce({
        save: jest.fn().mockRejectedValueOnce('error'),
      });

      // act
      await createOne(req, res);
      // assert
      expect(res.send).toHaveBeenCalledWith('error');
    });
  });

  describe('updateById', () => {
    test('should call res.json', async () => {
      const res = {
        json: jest.fn(),
        send: jest.fn(),
      };

      const req = {
        params: {
          id: null,
        },
        body: {},
      };

      await updateById(req, res);

      expect(res.json).toHaveBeenCalled();
    });

    test('should call res.send', async () => {
      const res = {
        json: jest.fn(),
        send: jest.fn(),
      };

      const req = {
        body: {},
        params: {
          id: null,
        },
      };

      List.findOneAndUpdate.mockRejectedValueOnce('error al buscar la task');

      await updateById(req, res);

      expect(res.send).toHaveBeenCalledWith('error al buscar la task');
    });
  });

  describe('deleteById', () => {
    test('should call json', async () => {
      const res = {
        status: jest.fn(),
        json: jest.fn(),
        send: jest.fn(),
      };

      const req = {
        params: {
          id: null,
        },
      };

      await deleteById(req, res);

      expect(res.json).toHaveBeenCalled();
    });

    test('should call status with 204', async () => {
      const res = {
        status: jest.fn(),
        json: jest.fn(),
        send: jest.fn(),
      };

      const req = {
        params: {
          id: null,
        },
      };

      await deleteById(req, res);

      expect(res.status).toHaveBeenCalledWith(204);
    });

    test('should fail and call res.send with error', async () => {
      const req = {
        params: {
          id: null,
        },
      };
      const res = {
        status: jest.fn(),
        json: jest.fn(),
        send: jest.fn(),
      };
      List.findOneAndDelete.mockRejectedValueOnce('error');

      await deleteById(req, res);

      expect(res.send).toHaveBeenCalledWith('error');
    });
  });
});
