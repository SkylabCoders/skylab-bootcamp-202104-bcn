test('Given a getTask function creator', () => {
  const result = getTask();
  expect(actionTypes.GET_TASK).toBe(result.type);
});
