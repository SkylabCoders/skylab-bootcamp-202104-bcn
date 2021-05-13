/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import {
  loadTasks, deleteTask, addTask, doneTask,
} from '../redux/actions/actionCreator';
import './inputTask.css';

function InputTask({ tasks, dispatch }) {
  const [taskText, setTaskText] = useState();
  useEffect(() => {
    if (!tasks.length) dispatch(loadTasks());
  });

  function handleAdd() {
    const newTask = {
      text: taskText,
      state: false,
    };
    dispatch(addTask(newTask));
  }

  function getTask(event) {
    setTaskText(event.target.value);
  }

  function selectDoneTask(task) {
    const taskDone = { ...task, state: true };
    dispatch(doneTask(taskDone));
  }
  return (
    <div className="task-container">
      <label htmlFor="input-task" className="input-container">
        <input className="input-task" onChange={getTask} />
        <button type="button" className="button-add" onClick={() => handleAdd()}>+</button>
      </label>
      <ul className="task-list">
        <h2>List of task: </h2>
        {tasks.map((task) => (
          <li className={!task.state ? 'task-item' : 'task-item--done'}>
            {task.text}
            <div className="task-item__buttons">
              <button type="button" className="button-done" onClick={() => selectDoneTask(task)}> </button>
              <button type="button" className="button-delete" onClick={() => dispatch(deleteTask(task))}> </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

InputTask.propTypes = {
  tasks: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(tasks) {
  return {
    tasks,
  };
}

export default connect(mapStateToProps)(InputTask);
