function strictEquals (a,b) {
    if (isNaN(a)&&isNaN(b)) {
      return false;
  } else if (Object.is (a, -0) && Object.is (0, b)) {
      return true;
  } else if (Object.is (a, 0) && Object.is (-0, b)) {
      return true;
  } else {
      return Object.is (a, b);
    }
}