/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { PrintTask } from '../redux/actions/actionCreators';

function TaskSite({ tasks, dispatch }) {
  useEffect(() => {
    if (!tasks.length) dispatch(PrintTask());
  }, []);
  return tasks.map((task) => (
    <>
      <p>
        {task.id}
        -
        {task.task}
      </p>
      <button type="button">Delete</button>
      <button type="button">Modify</button>
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
