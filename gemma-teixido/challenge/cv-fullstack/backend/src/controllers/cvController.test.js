const {
  getInformation,
  getInformationById
} = require('./cvController')();
const Information = require('../model/cvModel');

jest.mock('../model/cvModel');

describe('getInformation', () => {
  test('should get json', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };

    Information.find.mockResolvedValueOnce([{ Position: 'Waitress' }]);

    await getInformation(null, res);

    expect(res.json).toHaveBeenCalledWith([{ Position: 'Waitress' }]);
  });
});

describe('getInformationByID', () => {
  test('should get json', async () => {
    const req = {
      params: {
        curriculumId: 9
      }
    };
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };

    Information.findById.mockResolvedValueOnce([{ id: 9 }]);

    await getInformationById(req, res);

    expect(res.json).toHaveBeenCalledWith([{ id: 9 }]);
  });
  test('should get status', async () => {
    const req = {
      params: {
        curriculumId: 9
      }
    };
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };

    Information.findById.mockRejectedValueOnce([404]);

    await getInformationById(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
  });
});
