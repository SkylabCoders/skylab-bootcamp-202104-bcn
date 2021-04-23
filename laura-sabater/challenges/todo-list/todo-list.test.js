function mySync(param) {
  return !!'algo';
}
function myAsync(param) {
  return Promise.resolve(true);
}
function myAsyncReject(param) {
  return Promise.resolve(true);
}
module.exports = {mySync, myAsync};
// JS.test
const {mySync, myAsync} = required('./async');
test('should resolve and sync function', () => {
  const result = mySync();
  expect(result).toBe(true);
})
test'should resolve and async function', () => {
  return myAsync().then(result => {
    expect(result).toBe(true);
  })
}
test'should resolve and async await function', () => {
  const return = await myAsync();
    expect(result).toBe(true);
  })
}
test'should reject and async await function', () => {
  return myAsyncReject().then(result => {
    expect(result).toBe(true);
  })
}
test'should reject and async await function', () => {
  try {
    return myAsyncReject()
  } catch (result){
    expect(result).toBe(true);
  }
  })
}