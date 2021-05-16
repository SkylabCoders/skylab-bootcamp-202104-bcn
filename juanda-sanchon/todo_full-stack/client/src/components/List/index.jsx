/* eslint-disable no-debugger */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { loadTask, updateTask, deleteTask } from '../../redux/actions/actionCreator';
import './list.css';

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
    <bodier className="bodier">
      <h3>MY LIST</h3>
      <ul className="bodier__list">
        {tasks.map(
          (task) => (
            <li className="bodier__item">
              <p className={!task.done ? 'bodier__task' : 'bodier__task--done'}>{task.task}</p>
              <button className="bodier__button--up" type="button" onClick={() => updateTaskLine(task)}> </button>
              <button className="bodier__button--del" type="button" onClick={() => deleteTaskLine(task)}> </button>
            </li>
          )
        )}

      </ul>
    </bodier>
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
