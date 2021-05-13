import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTask, loadTasks, createTask } from '../../redux/actions/actionCreators';

function TasksList({ tasks, dispatch }) {
  const [taskValue, setTaskValue] = useState();

  useEffect(() => {
    if (!tasks.length) dispatch(loadTasks());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  function getTaskValue(event) {
    setTaskValue(event.target.value);
  }

  function handleCreate() {
    dispatch(createTask({ name: taskValue }));
  }

  return (
    <>
      <h2>All tasks</h2>
      <input type="text" onChange={getTaskValue} />
      {' '}
      <button type="button" onClick={() => handleCreate()}>Create</button>
      <ul>
        {
        tasks && tasks.map((task) => (
          <li key={`${task.taskId}`}>
            {' '}
            {task.name}
            {task.isFinished
              ? ' ---- acabado'
              : ' ---- dale'}
            {' '}
            <button type="button" onClick={() => handleDelete(task.taskId)}>Delete</button>
          </li>
        ))
    }
      </ul>
    </>
  );
}

TasksList.propTypes = {
  tasks: PropTypes.shape([{}]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    tasks: store.tasks,
  };
}
export default connect(mapStateToProps)(TasksList);
