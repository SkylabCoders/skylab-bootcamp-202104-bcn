import loadInformation from './actionCreators';

jest.mock('axios');

describe('loadInformation', () => {
  test('should dispatch error', async () => {
    const loadInformationResponse = loadInformation();
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn()
    });
    const dispatch = jest.fn();
    await loadInformationResponse(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'LOAD_CURRICULUM_ERROR'
    });
  });
});
