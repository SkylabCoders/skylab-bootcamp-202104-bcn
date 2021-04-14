function strictEquality(a, b) {
  return a == b && Object.is(a, b) ? true : false;
}

strictEquality(1, 1);
