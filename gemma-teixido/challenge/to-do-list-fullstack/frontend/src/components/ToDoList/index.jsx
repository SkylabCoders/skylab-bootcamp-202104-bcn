/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  addTask, loadTasks, deleteTask, doneTask
} from '../../redux/actions/actionCreator';

import './ToDoList.css';

function ToDoList({ tasks, dispatch }) {
  useEffect(() => {
    if (!tasks.length) dispatch(loadTasks());
  }, []);

  const [newestTask, setNewestTask] = useState(null);

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  function handleDone(taskId) {
    dispatch(doneTask(taskId));
  }

  const handleAddTask = () => {
    let newId = 1;
    if (tasks.length !== 0) newId = tasks[tasks.length - 1].id + 1;
    const task = {
      id_: newId,
      task: newestTask
    };
    dispatch(addTask(task));
  };

  function taskInputCreation(event) {
    setNewestTask(event.target.value);
  }

  return (

    <section>
      <div className="inputTask">
        <label htmlFor="taskInputCreation">
          <input onChange={taskInputCreation} placeholder="New task..." />
          <button type="button" className="addTask" onClick={() => handleAddTask()}> </button>
        </label>
      </div>
      <ul>
        {tasks?.map((task) => (
          <label htmlFor="taskTrashCreation">
            <li className={!task.completed ? 'task-item' : 'task-item--done'}>
              {task.task}
              <button
                type="button"
                className="deleteTask"
                onClick={() => handleDelete(task._id)}
              >
                {' '}
              </button>
              <button
                type="button"
                className="doneTask"
                onClick={() => handleDone(task._id)}
              >
                {' '}
              </button>
            </li>
          </label>
        ))}
      </ul>
    </section>

  );
}
ToDoList.propTypes = {
  tasks: PropTypes.shape([{
    name: PropTypes.shape({})
  }]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(taskStore) {
  return {
    tasks: taskStore.tasks
  };
}

export default connect(mapStateToProps)(ToDoList);
