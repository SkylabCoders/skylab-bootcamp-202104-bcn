/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadTasks, addTask, deleteTask } from '../redux/actions/actionCreator';

const TodoList = ({ tasks, dispatch }) => {
  useEffect(() => {
    if (!tasks.length) dispatch(loadTasks());
  }, []);

  function handleAddTask() {
    const newTask = document.getElementById('new-task-name').value;
    dispatch(addTask({ name: newTask }));
  }

  function handleDeleteTask(taskId) {
    dispatch(deleteTask(taskId));
  }

  return (
    <>
      <form>
        <label htmlFor="new-task-input" id="new-task-input">
          <span>
            Add new task:
            {' '}
          </span>
          <input
            type="text"
            id="new-task-name"
            placeholder="New Task"
          />
          <button
            className="add-button"
            type="button"
            onClick={() => handleAddTask()}
          >
            Add
          </button>
        </label>
      </form>
      <ul className="to-do-list">
        {tasks.map((task) => (
          <li className="to-do-list__task">
            {' '}
            {task.name}
            <button
              className="delete-button"
              type="button"
              onClick={() => handleDeleteTask(task._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

TodoList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  tasks: PropTypes.shape([]).isRequired
};

function mapStateToProps({ tasks }) {
  return { tasks };
}

export default connect(mapStateToProps)(TodoList);
