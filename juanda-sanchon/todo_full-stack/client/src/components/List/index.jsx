/* eslint-disable no-debugger */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { loadTask, updateTask, deleteTask } from '../../redux/actions/actionCreator';

function List({ tasks, dispatch }) {
  useEffect(() => {
    if (!tasks.length)dispatch(loadTask());
  }, [tasks.length]);

  function updateTaskLine(task) {
    const updateDone = { ...task, done: true };
    dispatch(updateTask(updateDone));
  }
  function deleteTaskLine(id) {
    dispatch(deleteTask(id));
  }

  return (

    <>
      <h3>MY LIST</h3>
      <ul>
        {tasks.map(
          (task) => (
            <li>
              <p className={!task.done ? 'list' : 'list--done'}>{task.task}</p>
              <button type="button" onClick={() => updateTaskLine(task)}>DONE</button>
              <button type="button" onClick={() => deleteTaskLine(task)}>X</button>
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
