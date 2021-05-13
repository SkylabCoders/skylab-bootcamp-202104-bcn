import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadTasks } from '../redux/actions/actionCreator';

const TodoList = ({ tasks, dispatch }) => {
  useEffect(() => {
    if (!tasks.length) dispatch(loadTasks());
  }, []);

  return (
    <>
      <label htmlFor="new-task-input" id="new-task-input">
        <span>Add new task:</span>
        <input type="text" />
      </label>
    </>
  );
};

TodoList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  tasks: PropTypes.shape([]).isRequired
};

function mapStateToProps({ tasks }) {
  return { tasks };
}

export default connect(mapStateToProps)(TodoList);
