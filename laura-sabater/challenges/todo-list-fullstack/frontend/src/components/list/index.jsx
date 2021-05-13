/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import {
  loadTasks, deleteTask, addTask,
} from '../../redux/actions/actionCreators';

function List({ tasks, dispatch }) {
  useEffect(() => {
    if (!tasks.length) dispatch(loadTasks());
  }, []);
  function clickAdd() {
    const newTask = document.getElementById('new-task-name').value;
    dispatch(addTask({ title: newTask }));
  }
  function deleteClick(taskId) {
    dispatch(deleteTask(taskId));
  }
  return (
    <>
      <h2>Todo List</h2>
      <form>
        <label htmlFor="task-name">
          Add Task:
          <input
            id="new-task-name"
            placeholder="New task Name"
          />
          <button type="button" className="add" onClick={() => clickAdd()}>ADD</button>
        </label>
      </form>
      <ul className="to-do-list">
        {tasks.map((task) => (
          <li className="to-do-list__task">
            <span>{task.title}</span>
            <button
              type="button"
              className="delete"
              onClick={() => deleteClick(task._id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>

    </>
  );
}
List.propTypes = {
  tasks: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    tasks: store.tasks,
  };
}

export default connect(mapStateToProps)(List);
