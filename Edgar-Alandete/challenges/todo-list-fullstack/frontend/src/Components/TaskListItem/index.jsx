/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const TaskListItem = ({
  task, itemKey, deleteHandler, updateHandler, editHandler,
}) => (
  <li key={itemKey} className="item">
    {' '}
    <span className={task.isFinished ? 'done' : ''}>
      {' '}
      {task.name}
    </span>

    <button className="button button--delete" type="button" onClick={() => deleteHandler(task._id)}>Delete</button>
    <button className="button button--edit" type="button" onClick={() => editHandler(task)}>Edit</button>
    <button className="button button--done" type="button" onClick={() => updateHandler(task)}>Done</button>
  </li>
);

TaskListItem.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isFinished: PropTypes.bool.isRequired,
  }).isRequired,

  itemKey: PropTypes.string.isRequired,

  deleteHandler: PropTypes.func.isRequired,
  updateHandler: PropTypes.func.isRequired,
  editHandler: PropTypes.func.isRequired,

};

export default TaskListItem;
