/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import './taskSite.css';
import { PrintTask, deleteTask } from '../redux/actions/actionCreators';

function TaskSite({ tasks, dispatch }) {
  useEffect(() => {
    if (!tasks.length) dispatch(PrintTask());
  }, []);

  function trashTask(taskId) {
    return dispatch(deleteTask(taskId));
  }
  function doneTask(taskId) {
    const classDone = document.getElementById(taskId);
    classDone.classList = 'done';
  }
  return tasks.map((task) => (
    <>
      <p id={task.id}>
        {task.id}
        -
        {task.task}
      </p>
      <button type="button" onClick={() => { trashTask(task.id); }}>Delete</button>
      <button type="button" onClick={() => { doneTask(task.id); }}>Done</button>
      <button type="button">Modify</button>
    </>
  ));
}
TaskSite.propTypes = {
  tasks: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(store) {
  return {
    tasks: store.tasks
  };
}

export default connect(mapStateToProps)(TaskSite);
