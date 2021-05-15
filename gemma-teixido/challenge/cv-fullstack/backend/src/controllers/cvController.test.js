const {
  getInformation
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
