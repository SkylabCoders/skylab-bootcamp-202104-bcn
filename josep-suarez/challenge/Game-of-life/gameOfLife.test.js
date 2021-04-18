const directionBlinker = (row, column) => {
  let positions = [
    [row - 1, column],
    [row, column],
    [row + 1, column],
  ];
  return positions;
};
