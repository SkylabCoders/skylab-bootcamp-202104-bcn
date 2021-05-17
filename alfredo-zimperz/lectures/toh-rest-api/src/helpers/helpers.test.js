const helpers = require('./index');

describe('getNextIdAndUpdateOld', () => {
  test('given an Id, should return next Id', () => {
    const id = 3;
    const result = helpers.getNextIdAndUpdateOld(id);
    expect(result).toBe(4);
  });
});
