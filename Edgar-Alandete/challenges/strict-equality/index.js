function strictEquality(a, b) {
  return (a == b && Object.is(a, b)) ||
    (Object.is(a, 0) && Object.is(b, -0)) ||
    (Object.is(a, -0) && Object.is(b, 0))
    ? true
    : false;
}

strictEquality(1, 1);
