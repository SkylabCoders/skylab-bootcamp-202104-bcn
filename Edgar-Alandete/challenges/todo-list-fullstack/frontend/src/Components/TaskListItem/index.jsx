/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';

const TaskListItem = ({ task, deleteHandler, updateHandler }) => (
  <li key={`${task._id}`}>
    {' '}
    {task.name}
    {task.isFinished
      ? ' ---- acabado'
      : ' ---- dale'}
    {' '}
    <button type="button" onClick={() => deleteHandler(task._id)}>Delete</button>
    <button type="button" onClick={() => updateHandler(task)}>Done</button>
  </li>
);

TaskListItem.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isFinished: PropTypes.bool.isRequired,
  }).isRequired,

  deleteHandler: PropTypes.func.isRequired,
  updateHandler: PropTypes.func.isRequired,

};

export default TaskListItem;
