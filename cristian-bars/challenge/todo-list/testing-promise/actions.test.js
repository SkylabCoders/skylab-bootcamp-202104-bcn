const { getPoke } = require('./actions');

test('should resolve and sync function', async () => {
  const result = await getPoke();
  expect(result).toEqual(true);
});
