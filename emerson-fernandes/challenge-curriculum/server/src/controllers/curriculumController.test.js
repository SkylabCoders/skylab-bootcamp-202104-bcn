const { getAll, createOne } = require('./curriculumController')();

const Curriculum = require('../model/curriculumModel');

jest.mock('../model/curriculumModel');

describe('getAll', () => {
  test('should get all data', async () => {
    // arrange
    const res = {
      json: jest.fn()
    };
    Curriculum.find.mockResolvedValueOnce([{ name: 'Emerson' }]);
    // act
    await getAll(null, res);
    // assert
    expect(res.json).toHaveBeenCalledWith([{ name: 'Emerson' }]);
  });
});

describe('createOne', () => {
  class MockData {
    constructor(name) {
      this.name = name;
    }

    // eslint-disable-next-line class-methods-use-this
    save() {}
  }

  test('should call json', async () => {
    // arrange
    const req = {
      body: null
    };
    const res = {
      json: jest.fn(),
      send: jest.fn()
    };

    const newData = new MockData('pro');

    Curriculum.mockReturnValueOnce(newData);

    // act
    await createOne(req, res);
    // assert
    expect(res.json).toHaveBeenCalledWith({ name: 'pro' });
  });
});
