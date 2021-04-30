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
    dispatch(addTask({ id: tasks[tasks.length - 1].id + 1, taskName: newTask }));
  }
  function deleteClick(id) {
    dispatch(deleteTask(id));
  }
  function updateClick(task) {
    dispatch(updateTask({ id: task.id, taskName: task.taskName, done: true }));
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
          <button type="button" className="add" onClick={() => clickAdd()}>ADD</button>
        </label>
      </form>
      <ul className="to-do-list">
        {tasks.map((task) => (
          <li className="to-do-list__task">
            {' '}
            <Link to={`/${task.id}`} className={!task.done ? 'task-name' : 'task-name--done'}>{task.taskName}</Link>
            <button
              type="button"
              className="delete"
              onClick={() => deleteClick(task.id)}
            >
              X
            </button>
            <button
              type="button"
              className="done"
              onClick={() => updateClick(task)}
            >
              ✓
            </button>
          </li>
        ))}
      </ul>

    </>
  );
}
Dashboard.propTypes = {
  tasks: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    tasks: store.tasks,
  };
}

export default connect(mapStateToProps)(Dashboard);
