const { getAll } = require('./cvsController')();
const Cv = require('../model/cvModel');

jest.mock('../model/cvModel');

describe('Given a getAll function', () => {
  test('should call res.status with code 200', async () => {
    Cv.find.mockResolvedValueOnce(200);
    const req = {};
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };
    await getAll(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });
  test('should call res.status with code 200', async () => {
    Cv.find.mockRejectedValueOnce('error');
    const req = {};
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
    await getAll(req, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});
