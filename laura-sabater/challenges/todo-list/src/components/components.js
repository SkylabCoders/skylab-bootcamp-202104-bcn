function createHtmlElement(elementType, elementClass, parent) {
  const htmlElement = document.createElement(elementType);
  htmlElement.classList.add(elementClass);
  parent.appendChild(htmlElement);
  return htmlElement;
}

function confirmModification(span, input, button, liId) {
  const newItem = input.value;
  span.innerHTML = newItem;
  input.remove();
  button.remove();
  modifyFromTodoList(liId, newItem);
}

function modifyElementList(liId, spanId) {
  const liToModify = document.getElementById(liId);
  const spanToModify = document.getElementById(spanId);
  const temporalInput = createHtmlElement('input', 'input__element', liToModify);
  const temporalButton = createHtmlElement('button', 'okButton', liToModify);
  temporalButton.innerText = 'Ok';
  temporalButton.onclick = function () {
    confirmModification(spanToModify, temporalInput, temporalButton, liId);
  };
}

function deleteElementList(liId) {
  const liToDelete = document.getElementById(liId);
  liToDelete.remove();
  deleteFromTodoList(liId);
}

function markElementList(spanId) {
  const spanToMark = document.getElementById(spanId);
  spanToMark.style = 'text-decoration: line-through';
}

function addHtmlList(store, inputValue) {
  const newItem = inputValue.value;
  // store.todoList.push(newItem);
  const liElement = createHtmlElement('li', 'list-element', list);
  liElement.id = `list-element-${store.numCreatedElements}`;
  const liElementId = liElement.id;

  const spanElement = createHtmlElement('span', 'span-element', liElement);
  spanElement.innerText = newItem;
  spanElement.id = `item-${store.numCreatedElements}`;
  const spanElementId = spanElement.id;

  const modifyButton = createHtmlElement('button', 'modify__button', liElement);
  modifyButton.innerHTML = 'Modify';
  modifyButton.onclick = function () {
    modifyElementList(liElementId, spanElementId);
  };
  const deleteButton = createHtmlElement('button', 'delete__button', liElement);
  deleteButton.innerHTML = 'Delete';
  deleteButton.onclick = function () {
    deleteElementList(liElementId);
  };
  const doneButton = createHtmlElement('button', 'done__button', liElement);
  doneButton.innerHTML = 'Done';
  doneButton.onclick = function () {
    markElementList(spanElementId);
  };

  addToTodoList(liElementId, newItem);

  inputValue.value = '';
}

function resetList(store, ul) {
  while (ul.hasChildNodes()) {
    ul.removeChild(ul.firstChild);
  }
  resetTodoList();
}

module.exports = { createHtmlElement, confirmModification };
