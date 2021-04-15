function strictEquals(a, b) {
  let result = a == b;
  if (
    (typeof a == "string" && typeof b != "string") ||
    (typeof b == "string" && typeof a != "string")
  ) {
    result = false;
  }
  return result;
}
strictEquals();
