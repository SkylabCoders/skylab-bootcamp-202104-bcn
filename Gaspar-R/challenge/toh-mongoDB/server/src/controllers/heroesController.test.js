const {
  createOne,
  getAll,
  deleteById,
  getById,
  updateById
} = require('./heroesController')();
const Hero = require('../model/heroModel');

jest.mock('../model/heroModel');
jest.mock('debug');

describe('getAll', () => {
  test('shoud get all heroes', async () => {
    // arrange
    const res = {
      json: jest.fn(),
      status: jest.fn()
    };

    Hero.find.mockResolvedValueOnce([{ name: 'Pepe' }]);
    // act
    // const { getAll } = heroesController(); // como destructuro directmante no hace falta
    await getAll(null, res);

    // assert
    expect(res.json).toHaveBeenCalledWith([{ name: 'Pepe' }]);
  });

  test('shoud return status 200', async () => {
    // arrange
    const res = {
      json: jest.fn(),
      status: jest.fn()
    };

    Hero.find.mockResolvedValueOnce();
    // act
    await getAll(null, res);

    // assert
    expect(res.status).toHaveBeenCalledWith(200);
  });
});

describe('createOne', () => {
  test('shoud get a new hero', async () => {
    // arrange
    const res = {
      json: jest.fn(),
      status: jest.fn()
    };
    const req = {
      body: {
        id: 15,
        name: 'Dr Caca'
      }
    };
    Hero.mockReturnValueOnce({ save: jest.fn() });
    // act
    await createOne(req, res);

    // assert
    expect(res.json).toHaveBeenCalledWith({ id: 15, name: 'Dr Caca', save: jest.fn() });
  });

  test('shoud call debug with an error', async () => {
    // arrange
    const req = {
      body: null
    };

    const res = {
      json: jest.fn(),
      send: jest.fn()
    };
    Hero.mockResolvedValueOnce({
      save: jest.fn().mockResolvedValueOnce('Error')
    });
    // act
    await createOne(req, res);

    // assert
    expect(res.send).toHaveBeenCalledWith('Error');
  });
});

describe('getById', () => {
  test('shoud get a hero by Id', async () => {
    // arrange
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };
    const req = { params: { heroId: 5 } };

    // act
    Hero.findById.mockResolvedValueOnce({ id: 5, name: 'Cacho' });
    await getById(req, res);

    // assert
    expect(res.json).toHaveBeenCalledWith({ id: 5, name: 'Cacho' });
  });

  test('shoud resolve as 404', async () => {
    // arrange
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };
    const req = { params: { heroId: null } };
    // act
    Hero.findById.mockRejectedValueOnce('');
    await getById(req, res);

    // assert
    expect(res.status).toHaveBeenCalledWith(404); // se puede testear res.json ,res.send
  });
});

describe('updateById', () => {
  test('shoud call res.json', async () => {
    // arrange
    const res = {
      json: jest.fn(),
      status: jest.fn()
    };
    const req = {
      body: { name: 'Dr Caca' },
      params: { heroId: 5 }
    };

    // act
    //* const { updateById } = heroesController([{ id: 5, name: 'Cacho' }]);
    // se puede hacer destructuring directamente cuando
    // se importa, por eso no hace falta hacerlo aca****//
    Hero.findByIdAndUpdate.mockResolvedValueOnce([{ id: 5, name: 'Dr Caca' }]);
    await updateById(req, res);

    // assert
    expect(res.json).toHaveBeenCalledWith([{ id: 5, name: 'Dr Caca' }]);
  });

  test('shoud call res.send', async () => {
    // arrange
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };
    const req = { params: { heroId: 15 } };

    // act
    Hero.findByIdAndUpdate.mockRejectedValueOnce('error');
    await updateById(req, res);

    // assert
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('deleteById', () => {
  test('shoud call a json function', async () => {
    // arrange
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()

    };
    const req = {
      params: { heroId: null }
    };

    // act
    Hero.findByIdAndDelete.mockResolvedValueOnce({});
    await deleteById(req, res);

    // assert
    expect(res.json).toHaveBeenCalledWith({});
  });

  test('shoud reject as res.status 404', async () => {
    // arrange
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };
    const req = { params: { heroId: null } };

    Hero.findByIdAndDelete.mockRejectedValueOnce('');

    // act
    await deleteById(req, res);

    // assert
    expect(res.status).toHaveBeenCalledWith(404);
  });
});
