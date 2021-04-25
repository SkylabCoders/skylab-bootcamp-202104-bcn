function findFreeId(tasks) {
  const sortedArray = tasks
    .slice() // Make a copy of the array.
    .sort((a, b) => a.id - b.id); // Sort it.
  let previousId = 0;
  for (const element of sortedArray) {
    if (element.id != (previousId + 1)) {
      // Found a gap.
      return previousId + 1;
    }
    previousId = element.id;
  }
  // Found no gaps.
  return previousId + 1;
}

/// ///////////////////////TEST/////////////////////////////

// findFreeId Test

describe('Given an findFreeId function', () => {
  const scenarios = [
    {
      array: [{ id: 1, title: 'uno', done: false },
        { id: 3, title: 'otro', done: false },
        { id: 4, title: 'ninguno', done: false }],
      result: 2,
    },
    {
      array: [{ id: 1, title: 'uno', done: false },
        { id: 2, title: 'otro', done: false },
        { id: 3, title: 'ninguno', done: false }],
      result: 4,
    },
  ];

  scenarios.forEach((scenario) => {
    describe(`When invoked with an array: ${scenario.array}`, () => {
      test(`Then return ${scenario.result}`, () => {
        // Act
        const result = findFreeId(scenario.array);

        // Assert
        expect(result).toStrictEqual(scenario.result);
      });
    });
  });
});
