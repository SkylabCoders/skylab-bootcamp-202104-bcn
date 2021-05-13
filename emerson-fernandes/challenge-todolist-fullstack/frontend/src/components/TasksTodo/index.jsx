import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadTasks, addTask } from '../../redux/actions/actionCreator';

function TasksTodo({ task, dispatch }) {
  const [taskName, setTaskName] = useState();

  useEffect(() => {
    if (!task.length) dispatch(loadTasks());
  }, []);

  return (
    <>
      <h1>To do list</h1>
      <input placeholder="Task to do" onChange={(event) => setTaskName(event.target.value)} />
      <button type="button" onClick={() => dispatch(addTask({ taskName }))}>add</button>
      <div />
    </>
  );
}

TasksTodo.propTypes = {
  task: PropTypes.shape([{}]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(configureStore) {
  return {
    tasks: configureStore.task
  };
}

export default connect(mapStateToProps)(TasksTodo);
