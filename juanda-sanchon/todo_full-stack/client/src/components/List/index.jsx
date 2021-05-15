/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { loadTask, updateTask } from '../../redux/actions/actionCreator';

function List({ tasks, dispatch }) {
  useEffect(() => {
    if (!tasks.length)dispatch(loadTask());
  }, [tasks.length]);

  function updateTaskLine(id, task) {
    dispatch(updateTask({ id, task }));
  }

  return (

    <>
      <h3>MY LIST</h3>
      <ul>
        {tasks.map(
          (task) => (
            <li>
              <p>{task.task}</p>
              <button type="button" onClick={() => updateTaskLine(task._id, task.task)}>UPDATE</button>
              <button type="button">DELETE</button>
            </li>
          )
        )}

      </ul>
    </>
  );
}

List.propTypes = {
  dispatch: PropTypes.func.isRequired,
  tasks: PropTypes.shape([]).isRequired
};

function mapStateToProps(store) {
  return {
    tasks: store.tasks
  };
}

export default connect(mapStateToProps)(List);
