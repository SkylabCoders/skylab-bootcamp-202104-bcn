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
  const li = createElement('li', `${newElementList}`, null, ul, `${array.length}`);
  const modifyButton = createElement('button', 'Modify', null, li);
  modifyButton.onclick = (() => modifyElement(elementId));
  const deleteButton = createElement('button', 'Delete', null, li);
  const elementId = li.id;
  deleteButton.onclick = (() => deleteTask(myArray, elementId));
  li.style = 'text-decoration:none';
  const doneButton = createElement('button', 'Done', null, li);
  doneButton.onclick = (() => addSyleElement(elementId));
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

function modifyElement(id) {
  const elementToModify = document.getElementById(id);
  const input = createElement('input', null, null, elementToModify);
  input.getAttribute('value');
  const buttonInput = createElement('button', 'Change', null, elementToModify);
  buttonInput.onclick = (() => addNewValue(elementToModify, input, myArray));
}

function addNewValue(oldTask, newTask, array) {
  const value = oldTask.innerHTML;
  const elementIndex = array.indexOf(value);
  const newValue = newTask.value;
  array.splice(elementIndex, 1, newValue);
  oldTask.innerHTML = newTask.value;
}
