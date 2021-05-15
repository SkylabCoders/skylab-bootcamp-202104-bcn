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
  }, []);

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
        <input className="input-task" data-testid="input-add" onChange={getTask} />
        <button type="button" className="button-add" data-testid="button-add" onClick={() => handleAdd()}>+</button>
      </label>
      <ul className="task-list">
        <h2>List of task: </h2>
        {tasks.length ? tasks.map((task) => (
          <li className={!task.state ? 'task-item' : 'task-item--done'}>
            {task.text}
            <div className="task-item__buttons">
              <button type="button" className="button-done" data-testid="button-done" onClick={() => selectDoneTask(task)}> </button>
              <button type="button" className="button-delete" data-testid="button-delete" onClick={() => dispatch(deleteTask(task))}> </button>
            </div>
          </li>
        )) : <p>No tasks</p>}
      </ul>
    </div>
  );
}

InputTask.propTypes = {
  tasks: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

// InputTask.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       code: PropTypes.string,
//       id: PropTypes.number,
//     })
//   ),
// };

function mapStateToProps(tasks) {
  return {
    tasks,
  };
}

export default connect(mapStateToProps)(InputTask);
