const {
  getAll,
  addData
} = require('./cvController')();
const Curriculum = require('../model/cvModel');

jest.mock('../model/cvModel');

describe('getAll', () => {
  test('shoud get all information', async () => {
    // arrange
    const res = {
      json: jest.fn()
    };
    Curriculum.find.mockResolvedValueOnce([{ name: 'Cristian' }]);

    // act
    await getAll(null, res);

    // assert
    expect(res.json).toHaveBeenCalledWith([{ name: 'Cristian' }]);
  });
});
describe('addData', () => {
  class MockInfo {
    constructor(cristian) {
      this.name = cristian;
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

    const newDetail = new MockInfo('Cristian');

    Curriculum.mockReturnValueOnce(newDetail);

    // act
    await addData(req, res);
    // assert
    expect(res.json).toHaveBeenCalledWith({ name: 'Cristian' });
  });

  test('should call send', async () => {
    // arrange
    const req = {
      body: null
    };
    const res = {
      json: jest.fn(),
      send: jest.fn()
    };

    Curriculum.mockReturnValueOnce({
      save: jest.fn().mockRejectedValueOnce('error')
    });

    // act
    await addData(req, res);
    // assert
    expect(res.send).toHaveBeenCalledWith('error');
  });
});
