/* eslint-disable no-underscore-dangle */
import { React, useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadTasks, deleteTask, markAsDone } from '../../redux/actions/actionCreators';

import './list.css';

function List({ tasks, dispatch }) {
  function handleDelete(e) {
    dispatch(deleteTask(e.target.id));
  }
  function handleDone(e) {
    const taskId = e.target.id;
    const taskToBeUpdated = tasks.find((task) => task._id === taskId);
    taskToBeUpdated.isCompleted = true;
    dispatch(markAsDone(taskToBeUpdated));
  }
  useEffect(() => {
    if (!tasks.length) dispatch(loadTasks());
  }, []);
  return (
    <ul className="task-list">
      {
        tasks.map((task) => (
          <li key={task.id} className="task-item">
            <p className={task.isCompleted ? 'task-item__name task-item__name--active' : 'task-item__name'}>{task.name}</p>
            <button type="button" className="task-item__btn delete-btn" onClick={(e) => handleDelete(e)} id={task._id}>Delete</button>
            <button type="button" className="task-item__btn done-btn" onClick={(e) => handleDone(e)} id={task._id}>Done</button>
          </li>
        ))
      }
    </ul>
  );
}

List.propTypes = {
  tasks: PropTypes.shape([{}]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps({ tasks }) {
  return {
    tasks,
  };
}

export default connect(mapStateToProps)(List);
