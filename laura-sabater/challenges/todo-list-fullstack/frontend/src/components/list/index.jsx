/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import {
  loadTasks, deleteTask, addTask,
} from '../../redux/actions/actionCreators';
import './list.css';

function List({ tasks, dispatch }) {
  useEffect(() => {
    if (!tasks.length) dispatch(loadTasks());
  }, []);
  function addOnClick() {
    const newTask = document.getElementById('new-task-name').value;
    dispatch(addTask({ title: newTask }));
  }
  function deleteOnClick(taskId) {
    dispatch(deleteTask(taskId));
  }
  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <form>
        <label htmlFor="task-name">
          <input
            id="new-task-name"
            placeholder="Add new task"
          />
          <button type="button" className="add" onClick={() => addOnClick()}>Add</button>
        </label>
      </form>
      <ul className="to-do-list">
        {tasks.map((task) => (
          <li className="to-do-list__task" key={`to-do-list__task-${task._id}`}>
            <span>{task.title}</span>
            <button type="button" className="delete" onClick={() => deleteOnClick(task._id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
List.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    tasks: store.tasks,
  };
}

export default connect(mapStateToProps)(List);
