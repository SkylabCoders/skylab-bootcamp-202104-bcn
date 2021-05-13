import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TaskListItem from '../TaskListItem/index';
import {
  deleteTask, loadTasks, createTask, updateTask,
} from '../../redux/actions/actionCreators';

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
  }

  function handleUpdate(task) {
    dispatch(updateTask(task));
  }

  return (
    <>
      <h2>All tasks</h2>
      <input type="text" onChange={getTaskValue} />
      {' '}
      <button type="button" onClick={handleCreate}>Create</button>
      <ul>
        {
        tasks && tasks.map((task) => (
          <TaskListItem task={task} deleteHandler={handleDelete} updateHandler={handleUpdate} />
        ))
    }
      </ul>
    </>
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
