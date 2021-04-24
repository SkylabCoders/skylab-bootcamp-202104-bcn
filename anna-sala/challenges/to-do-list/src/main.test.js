function fetchTaskJson() {
  return Promise.resolve(true);
}

test('should resolve fetchTaskJson async function', () => fetchTaskJson().then((result) => {
  expect(result).toBe(true);
}));
