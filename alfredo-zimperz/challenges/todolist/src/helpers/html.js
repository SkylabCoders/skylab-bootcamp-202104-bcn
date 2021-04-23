/* eslint-disable import/extensions */
/* eslint-disable no-unused-expressions */
import STORE from '../store/store.js';

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
  btnDelete.onclick = () => STORE.handleDelete(id);
  createElement('button', itemActionsContainer, 'actions__button--modify', id, 'Modify');
  createElement('h1', itemTextContainer, null, null, title);
  createElement('p', itemTextContainer, null, null, description);
  createElement('p', itemTextContainer, null, null, `done: ${done}`);
};

export default { createElement, createTaskListItem, getElementByClassName };
