const heroesController = require('./heroesController');

describe('Given a get All function', () => {
  test('Should get all heroes', () => {
    // arrange
    const res = {
      json: jest.fn(),
    };
    // act
    const { getAll } = heroesController();
    getAll(null, res);
    // assert
    expect(res.json).toHaveBeenCalledWith([{ id: 11, name: 'Dr Nice' }, { id: 12, name: 'Narco' }, { id: 13, name: 'Bombasto' }, { id: 14, name: 'Celeritas' }, { id: 15, name: 'Magneta' }, { id: 16, name: 'RubberMan' }, { id: 17, name: 'Dynama' }, { id: 18, name: 'Dr IQ' }, { id: 19, name: 'Magma' }, { id: 20, name: 'Tornado' }]);
  });
});

describe('Given a createOne function', () => {
  test('Should add a hero to the total heroes', () => {
    // arrange
    const res = {
      send: jest.fn(),
    };
    // act
    const { createOne } = heroesController();
    createOne({ body: { id: 33, name: 'Test Hero' } }, res);
    // assert
    expect(res.send).toHaveBeenCalledWith({ id: 33, name: 'Test Hero' });
  });
});

describe('Given a getById function', () => {
  test('Should return and error for not find the hero requested', () => {
    // arrange
    const res = {
      send: jest.fn(),
    };
    // act
    const { getById } = heroesController();
    getById({ params: { heroId: '3' } }, res);
    // assert
    expect(res.send).toHaveBeenCalledWith('There is no hero with id 3');
  });
});

describe('Given a getById function', () => {
  test('Should return the hero with the id requested', () => {
    // arrange
    const res = {
      json: jest.fn(),
    };
    // act
    const { getById } = heroesController();
    getById({ params: { heroId: '13' } }, res);
    // assert
    expect(res.json).toHaveBeenCalledWith({ id: 13, name: 'Bombasto' });
  });
});

describe('Given a updateById function', () => {
  test('Should return the heroes list with the hero modificated', () => {
    // arrange
    const res = {
      json: jest.fn(),
    };
    // act
    const { updateById } = heroesController();
    updateById({ body: { name: 'New name' }, params: { heroId: 12 } }, res);
    // assert
    expect(res.json).toHaveBeenCalledWith([{ id: 11, name: 'Dr Nice' }, { id: 12, name: 'New name' }, { id: 13, name: 'Bombasto' }, { id: 14, name: 'Celeritas' }, { id: 15, name: 'Magneta' }, { id: 16, name: 'RubberMan' }, { id: 17, name: 'Dynama' }, { id: 18, name: 'Dr IQ' }, { id: 19, name: 'Magma' }, { id: 20, name: 'Tornado' }, { id: 33, name: 'Test Hero' }]);
  });
});

describe('Given a deleteById function', () => {
  test('Should return the hero with the id requested', () => {
    // arrange
    const res = {
      status: jest.fn(),
      end: jest.fn(),
    };
    // act
    const { deleteById } = heroesController();
    deleteById({ params: { heroId: '13' } }, res);
    // assert
    expect(res.status).toHaveBeenCalledWith(204);
  });
});
