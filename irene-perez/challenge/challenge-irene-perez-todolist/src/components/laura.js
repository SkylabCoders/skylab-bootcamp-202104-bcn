function createNewElement(elementType, elementClass, parent) {
  const element = document.createElement(elementType);
  element.classList.add(elementClass);
  parent.appendChild(element);
  return element;
}
function confirmModification(element, input, button, array, ul) {
  const oldValue = element.innerText;
  const indexOldValue = array.indexOf(oldValue);
  const newValue = input.value;
  array.splice(indexOldValue, 1, newValue);
  element.innerText = input.value;
  input.remove();
  button.remove();
}
function modifyElementList(liId, spanId) {
  const elementToModify = document.getElementById(liId);
  const spanToModify = document.getElementById(spanId);
  const newValue = createNewElement('input', 'input__element', elementToModify);
  const okButton = createNewElement('button', 'okButton', elementToModify);
  okButton.innerText = 'Ok';
  okButton.onclick = function () {
    confirmModification(spanToModify, newValue, okButton, todoList, list);
  };
}
function deleteElementList(array, id) {
  const elementToDelete = document.getElementById(id);
  const content = elementToDelete.innerHTML;
  const contentIndex = array.indexOf(content);
  array.splice(contentIndex, 1);
  elementToDelete.remove();
}
function markElementList(id) {
  const elementToMark = document.getElementById(id);
  elementToMark.style = 'text-decoration: line-through';
}
function addToList(array, element) {
  const newElement = element.value;
  array.push(newElement);
  const elementList = createNewElement('li', 'element__list', list);
  elementList.id = `item${array.length}`;
  const elementId = elementList.id;
  const elementListText = createNewElement('span', 'text-list', elementList);
  elementListText.innerText = newElement;
  elementListText.id = `text${array.length}`;
  const textId = elementListText.id;
  const modifyButton = createNewElement('button', 'modify__button', elementList);
  modifyButton.innerHTML = 'Modify';
  modifyButton.onclick = function () {
    modifyElementList(elementId, textId);
  };
  const deleteButton = createNewElement('button', 'delete__button', elementList);
  deleteButton.innerHTML = 'Delete';
  deleteButton.onclick = function () {
    deleteElementList(todoList, elementId);
  };
  const doneButton = createNewElement('button', 'done__button', elementList);
  doneButton.innerHTML = 'Done';
  doneButton.onclick = function () {
    markElementList(elementId);
  };
  element.value = '';
  return elementList;
}
function resetList(array, ul) {
  while (ul.hasChildNodes()) {
    ul.removeChild(ul.firstChild);
  }
  array.length = 0;
  return array;
}
