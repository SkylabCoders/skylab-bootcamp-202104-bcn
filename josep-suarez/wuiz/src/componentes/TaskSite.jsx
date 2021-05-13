/* eslint-disable no-underscore-dangle */
/* eslint-disable no-debugger */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import './taskSite.css';
import { PrintTask, deleteTask, modifyTask } from '../redux/actions/actionCreators';

function TaskSite({ tasks, dispatch }) {
  debugger;
  useEffect(() => {
    dispatch(PrintTask());
  }, [tasks]);

  function trashTask(taskId) {
    return dispatch(deleteTask(taskId));
  }
  function doneTask(taskId) {
    const classDone = document.getElementById(taskId);
    classDone.classList = 'done';
    const buttonDone = document.getElementById(`button${taskId}`);
    buttonDone.style.background = 'green';
  }
  function modifyClickTask(taskId) {
    const newTaskInput = document.getElementById('inputTask');
    return dispatch(modifyTask({ id: taskId, task: newTaskInput.value }));
  }
  debugger;
  return tasks.map((task) => (
    <>
      <p id={task.id}>
        {task.task}
      </p>
      <button type="button" id={`buttonDelete${task.id}`} onClick={() => { trashTask(task._id); }}>Delete</button>
      <button type="button" id={`button${task.id}`} onClick={() => { doneTask(task.id); }}>Done</button>
      <button type="button" id={`buttonModify${task.id}`} onClick={() => { modifyClickTask(task.id); }}>Modify</button>
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
