import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTask, loadTasks } from '../../redux/actions/actionCreators';

function TasksList({ tasks, dispatch }) {
  useEffect(() => {
    if (!tasks.length) dispatch(loadTasks());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <>
      <h2>All tasks</h2>
      <ul>
        {
        tasks && tasks.map((task) => (
          <li key={`${task.taskId}`}>
            {' '}
            {task.value}
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
