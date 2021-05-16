/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import {
  loadTasks, deleteTask, addTask, updateTask,
} from '../../redux/actions/actionCreators';

function Dashboard({ tasks, dispatch }) {
  useEffect(() => {
    if (!tasks.length) dispatch(loadTasks());
  }, []);
  function clickAdd() {
    const newTask = document.getElementById('new-task-name').value;
    dispatch(addTask({ taskTitle: newTask, done: false }));
  }
  function deleteClick(task) {
    dispatch(deleteTask(task));
  }
  function updateClick(task) {
    if (!task.done) {
      dispatch(updateTask({ ...task, done: true }));
    }
  }
  return (
    <>
      <form>
        <label htmlFor="task-name">
          Add Task:
          <input
            id="new-task-name"
            placeholder="New task Name"
          />
          <button type="button" className="add" onClick={() => clickAdd()} data-testid="add-task-button">ADD</button>
        </label>
      </form>
      <ul className="to-do-list">
        {tasks.length
          ? tasks.map((task) => (
            <li className="to-do-list__task" key={task._id}>
              {' '}
              <Link to={`/${task._id}`} className={!task.done ? 'task-name' : 'task-name--done'}>{task.taskTitle}</Link>
              <button
                type="button"
                className="delete"
                id={task._id}
                onClick={() => deleteClick(task)}
              >
                X
              </button>
              <button
                type="button"
                className="done"
                id={task._id}
                onClick={() => updateClick(task)}
              >
                ✓
              </button>
            </li>
          ))
          : <span>There are no tasks to do!</span>}
      </ul>

    </>
  );
}
Dashboard.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    length: PropTypes.number,
  }).isRequired).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    tasks: store.tasks,
  };
}

export default connect(mapStateToProps)(Dashboard);
