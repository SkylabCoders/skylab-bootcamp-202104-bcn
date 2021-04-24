function createNewElement(elementType, elementClass, parent) {
  const element = document.createElement(elementType);
  element.classList.add(elementClass);
  parent.appendChild(element);
  return element;
}

// function createList(array) {
//   array.forEach((element) => {
//     const elementList = createNewElement('li', 'element__list', list);
//     elementList.innerHTML = element;
//     const deleteButton = createNewElement('button', 'delete__button', elementList);
//     deleteButton.innerHTML = 'Delete';
//     const modifyButton = createNewElement('button', 'modify__button', elementList);
//     modifyButton.innerHTML = 'Modify';
//     const doneButton = createNewElement('button', 'done__button', elementList);
//     doneButton.innerHTML = 'Done';
//   });
// }

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
  elementList.innerHTML = newElement;
  elementList.id = `item${array.length}`;
  const elementId = elementList.id;
  elementList.style = 'text-decoration: none';
  const elementStyle = elementList.style;
  const deleteButton = createNewElement('button', 'delete__button', elementList);
  deleteButton.innerHTML = 'Delete';
  deleteButton.onclick = function () {
    deleteElementList(todoList, elementId);
  };
  const modifyButton = createNewElement('button', 'modify__button', elementList);
  modifyButton.innerHTML = 'Modify';
  const doneButton = createNewElement('button', 'done__button', elementList);
  doneButton.innerHTML = 'Done';
  doneButton.onclick = function () {
    markElementList(elementId);
  };
  return elementList;
}
