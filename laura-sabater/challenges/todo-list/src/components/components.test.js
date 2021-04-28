const { createHtmlElement, confirmModification } = require('./components');

test('createHtmlElement function should create an HtmlElement', () => {
  const parent = document.createElement('main');
  const result = createHtmlElement('input', 'someClass', parent);

  expect(result.tagName).toBe('INPUT');
  expect(result.className).toBe('someClass');
  expect(result.parentElement).toBe(parent);
});

test('confirmModification function should change span text, add element to store object, remove input element and remove button element', () => {
  const span = document.createElement('span');
  span.innerHTML = 'dog';
  const input = document.createElement('input');
  input.value = 'cat';
  const button = document.createElement('button');
  const store = {
    todoList: new Map(),
    numCreatedElements: 0,
  };
  const liId = 'list-element-2';
  confirmModification(span, input, button, store, liId);

  expect(span.innerHTML).toBe('cat');
  expect(store.todoList.has(liId)).toEqual(true);
  expect(store.todoList.get(liId)).toBe('cat');
  expect(document.contains(input)).toEqual(false);
  expect(document.contains(button)).toEqual(false);
});
