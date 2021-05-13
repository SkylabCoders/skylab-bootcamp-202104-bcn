import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TaskListItem from '../TaskListItem/index';
import {
  deleteTask, loadTasks, createTask, updateTask,
} from '../../redux/actions/actionCreators';

import './styles.css';

function TasksList({ tasks, dispatch }) {
  const [taskValue, setTaskValue] = useState();

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
    dispatch(createTask({ name: taskValue }));
    setTaskValue('');
  }

  function handleUpdate(task) {
    dispatch(updateTask(task));
  }

  return (
    <main>
      <h2>All tasks</h2>
      <div className="task-creator-container">

        <input placeholder="New task..." type="text" onChange={getTaskValue} value={taskValue} className="task-creator-container__input" />
        {' '}
        <button type="button" onClick={handleCreate} className="task-creator-container__button">Add a task</button>
      </div>
      <ul className="tasks-list">
        {
        tasks && tasks.map((task) => (
          <TaskListItem task={task} deleteHandler={handleDelete} updateHandler={handleUpdate} />
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

function mapStateToProps(store) {
  return {
    tasks: store.tasks,
  };
}
export default connect(mapStateToProps)(TasksList);
