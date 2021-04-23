/* eslint-disable import/extensions */
import STORE from '../store/store.js';
import HTML_HELPERS from '../helpers/html.js';

const tasklist = document.querySelector('.todo-list');

STORE.state.tasks.forEach((element) => {
  HTML_HELPERS.createElement('li', 'todo-list_item', element.title, tasklist);
});
