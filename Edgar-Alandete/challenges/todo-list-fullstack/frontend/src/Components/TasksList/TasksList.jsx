/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TaskListItem from '../TaskListItem/index';
import {
  deleteTask, loadTasks, createTask, updateTask,
} from '../../redux/actions/actionCreators';

import './styles.css';

function TasksList({ tasks, dispatch }) {
  const [taskValue, setTaskValue] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(false);

  useEffect(() => {
    if (!tasks.length) dispatch(loadTasks());
  }, [tasks.length]);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  function getTaskValue(event) {
    setTaskValue(event.target.value);
  }

  function handleCreate() {
    if (taskValue) {
      dispatch(createTask({ name: taskValue }));
      setTaskValue('');
    }
  }

  function handleDone(task) {
    const newTask = { ...task, isFinished: true };
    dispatch(updateTask(newTask));
  }

  function handleEditTaskMode(task) {
    setTaskValue(task.name);
    setTaskToUpdate(task);
    setEditMode(true);
  }

  function handleUpdateTask() {
    const newTask = { ...taskToUpdate, name: taskValue };
    dispatch(updateTask(newTask));
    setTaskValue('');
    setEditMode(false);
  }

  return (
    <main>
      <h2>All tasks</h2>
      <div className="task-creator-container">

        <input placeholder="New task..." type="text" onChange={getTaskValue} value={taskValue} className="task-creator-container__input" />
        {' '}
        {editMode
          ? <button type="button" onClick={handleUpdateTask} className="task-creator-container__button">Update Task</button>

          : <button type="button" onClick={handleCreate} className="task-creator-container__button">Add a task</button>}

      </div>
      <ul className="tasks-list">
        {
        tasks && tasks.map((task) => (
          <TaskListItem
            task={task}
            itemKey={task._id}
            deleteHandler={handleDelete}
            updateHandler={handleDone}
            editHandler={handleEditTaskMode}
          />
        ))
    }
      </ul>
    </main>
  );
}

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps({ tasks }) {
  return {
    tasks,
  };
}
export default connect(mapStateToProps)(TasksList);
