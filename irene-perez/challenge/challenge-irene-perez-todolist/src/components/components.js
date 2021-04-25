const createElement = (element, text, href, parent, id) => {
  const elementToCreate = document.createElement(element);
  if (text) {
    elementToCreate.innerText = text;
  }
  if (href) {
    elementToCreate.setAttribute('href', href);
  }
  if (id) {
    elementToCreate.setAttribute('id', id);
  }
  parent.appendChild(elementToCreate);
  return elementToCreate;
};

function addToList(element, array) {
  const newElementList = element.value;
  array.push(newElementList);
  const li = createElement('li', null, null, ul, `text${array.length}`);
  const span = createElement('span', `${newElementList}`, null, li, `item${array.length}`);
  const modifyButton = createElement('button', 'Modify', null, li);
  modifyButton.onclick = (() => modifyElement(elementIdLi, elementIdSpan));
  const deleteButton = createElement('button', 'Delete', null, li);
  const elementIdSpan = span.id;
  const elementIdLi = li.id;
  deleteButton.onclick = (() => deleteTask(myArray, elementIdLi));
  li.style = 'text-decoration:none';
  const doneButton = createElement('button', 'Done', null, li);
  doneButton.onclick = (() => addSyleElement(elementIdSpan));
}

function deleteTask(array, id) {
  const liToDelete = document.getElementById(id);
  const childLi = liToDelete.innerHTML;
  const liIndex = array.indexOf(childLi);
  array.splice(liIndex, 1);
  liToDelete.remove();
}

function addSyleElement(id) {
  const elementToMark = document.getElementById(id);
  elementToMark.style = 'text-decoration:line-through';
}

function modifyElement(LiId, spanId) {
  const liToModify = document.getElementById(LiId);
  const spanToModify = document.getElementById(spanId);
  const newInput = createElement('input', null, null, liToModify);
  input.getAttribute('value');
  const buttonInput = createElement('button', 'Change', null, liToModify);
  buttonInput.onclick = (() => addNewValue(spanToModify, newInput, buttonInput, myArray));
}

function addNewValue(elementToModify, input, button, array) {
  const oldValue = elementToModify.innerHTML;
  const oldValuetIndex = array.indexOf(oldValue);
  const newValue = input.value;
  array.splice(oldValuetIndex, 1, newValue);
  elementToModify.innerHTML = input.value;
  input.remove();
  button.remove();
}
