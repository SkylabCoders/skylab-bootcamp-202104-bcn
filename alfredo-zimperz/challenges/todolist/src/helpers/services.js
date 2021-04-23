import STORE from '../store/store.js';
import HTML_HELPERS from './html.js';
import ACTIONS from '../actions/actions.js';

const tasklist = document.querySelector('.todo-list');

const handleDelete = (id) => {
  console.log('delete', id);
  STORE.dispatch(ACTIONS.deleteTask(id));
};

const updateTaskList = (
) => {
  tasklist.innerHTML = '';
  STORE.tasks.forEach((task) => {
    HTML_HELPERS.createTaskListItem(
      task.id, task.title, task.description, task.done, tasklist, handleDelete,
    );
  });
};

export default { updateTaskList, handleDelete };
