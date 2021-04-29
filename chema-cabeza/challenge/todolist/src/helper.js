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
