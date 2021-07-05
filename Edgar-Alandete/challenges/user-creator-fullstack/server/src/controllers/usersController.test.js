const {
  getAll, createOne, getById, deleteById, updateById,
} = require('./usersController')();

const User = require('../model/userModel');

jest.mock('../model/userModel');

describe('Given usersController', () => {
  describe('When it is called with getAll function', () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    describe('And the promise is resolved', () => {
      test('Then all users should be returned', async () => {
        User.find.mockResolvedValueOnce([{ name: 'Edgar' }]);
        await getAll(null, res);

        expect(res.json).toHaveBeenCalledWith([{
          name: 'Edgar',
        }]);
      });
    });
    describe('And the promise is rejected', () => {
      test('Then a 404 status should be sent', async () => {
        User.find.mockRejectedValueOnce();
        await getAll(null, res);
        expect(res.send).toHaveBeenCalledWith(404);
      });
    });
  });

  describe('When it is called with a createOne function', () => {
    const req = {
      body: null,
    };
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    describe('And the promise is resolved', () => {
      test('Then a new user should be created', async () => {
        class UserMock {
          constructor(name) {
            this.name = name;
          }

          // eslint-disable-next-line class-methods-use-this
          save() {}
        }

        const newUser = new UserMock('New User');

        User.mockReturnValueOnce(newUser);
        await createOne(req, res);
        expect(res.json).toHaveBeenCalledWith(newUser);
      });
    });

    describe('And the promise is rejected', () => {
      test('Then an error should be send', async () => {
        User.mockReturnValueOnce({
          save: jest.fn().mockRejectedValueOnce('error'),
        });
        await createOne(req, res);
        expect(res.send).toHaveBeenCalledWith('error');
      });
    });
  });

  describe('When it is called with a getById function', () => {
    const req = {
      body: null,
      params: {
        userId: 1,
      },
    };
    const res = {
      json: jest.fn(),
      send: jest.fn(),
      status: jest.fn(),
    };

    describe('And the promise is resolved', () => {
      test('Then a user with an specific id should be shown', async () => {
        User.findById.mockResolvedValueOnce({ id: 1, name: 'Batman' });
        await getById(req, res);
        expect(res.json).toHaveBeenCalledWith({
          id: 1,
          name: 'Batman',
        });
      });
    });

    describe('And the promise is rejected', () => {
      test('Then the status code 404 should be sent', async () => {
        User.findById.mockRejectedValueOnce();
        await getById(req, res);
        expect(res.status).toHaveBeenCalledWith(404);
      });
    });
  });

  describe('When it is called with a deleteById function', () => {
    const req = {
      body: null,
      params: {
        userId: null,
      },
    };
    const res = {
      status: jest.fn(),
    };

    describe('And the promise is resolved', () => {
      test('Then a status 204 should be sent', async () => {
        User.findByIdAndDelete.mockResolvedValueOnce();
        await deleteById(req, res);
        expect(res.status).toHaveBeenCalledWith(204);
      });
    });

    describe('And the promise is rejected', () => {
      test('Then the status code 404 should be sent', async () => {
        User.findByIdAndDelete.mockRejectedValueOnce();
        await deleteById(req, res);
        expect(res.status).toHaveBeenCalledWith(404);
      });
    });
  });
  describe('When it is called with a updateById function', () => {
    const req = {
      body: null,
      params: {
        userId: null,
      },
    };
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn(),
    };

    describe('And the promise is resolved', () => {
      test('Then a status 204 should be sent', async () => {
        User.findByIdAndUpdate.mockResolvedValueOnce({ id: 1, name: 'Man in the sun' });
        await updateById(req, res);
        expect(res.json).toHaveBeenCalledWith({ id: 1, name: 'Man in the sun' });
      });
    });

    describe('And the promise is rejected', () => {
      test('Then the status code 404 should be sent', async () => {
        User.findByIdAndUpdate.mockRejectedValueOnce();
        await updateById(req, res);
        expect(res.send).toHaveBeenCalledWith(404);
      });
    });
  });
});
