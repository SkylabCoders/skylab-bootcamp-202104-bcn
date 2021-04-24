const getElementByClassName = (className) => document.querySelector(`.${className}`);

const createElement = (
  tag,
  parent = null,
  className = null,
  id = null,
  innerText = null,
) => {
  const newElement = document.createElement(tag);
  className && (newElement.classList.add(className));
  id !== null && (newElement.setAttribute('id', id));
  innerText && (newElement.innerText = innerText);
  parent && parent.appendChild(newElement);
  return newElement;
};

const createTaskListItem = (id, title, description, done, parent) => {
  const item = createElement('div', parent, 'todo-list_item', null, null);
  const itemTextContainer = createElement('div', item, 'item__text-container', null, null);
  const itemActionsContainer = createElement('div', item, 'item__actions-container', null, null);
  const btnDelete = createElement('button', itemActionsContainer, 'actions__button--delete', id, 'Delete');
  btnDelete.onclick = () => handleDelete(id);
  const btnModify = createElement('button', itemActionsContainer, 'actions__button--modify', id, 'Modify');
  btnModify.onclick = () => handleModify(id);
  const btnToogleState = createElement('button', itemActionsContainer, 'actions__button--toogle', id, 'Complete');
  btnToogleState.onclick = () => handleComplete(id);
  const taskh1 = createElement('h1', itemTextContainer, null, null, title);
  if (done) { taskh1.classList.add('done'); }
  createElement('p', itemTextContainer, null, null, description);
  createElement('p', itemTextContainer, null, null, `done: ${done}`);
};
