const { test } = require('@jest/globals');

function getInputValue(inputTextValue) {
  return createTaskAction(inputTextValue);
}

const createTaskAction = (value) => {
  const addTask = new Promise((resolve, reject) => {
    if (value) {
      resolve({
        type: 'CREATE_TASK',
        data: value,
      });
    } else {
      reject({
        type: 'ERROR',
        message: 'Empty Input',
      });
    }
  });
  return addTask;
};

test('should resolve getInputValue async function', () => getInputValue('32').then((result) => {
  expect(result).toStrictEqual({
    type: 'CREATE_TASK',
    data: '32',
  });
}));
