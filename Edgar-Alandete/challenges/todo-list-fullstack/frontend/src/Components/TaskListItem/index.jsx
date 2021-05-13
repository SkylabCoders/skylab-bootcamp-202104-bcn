/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const TaskListItem = ({ task, deleteHandler, updateHandler }) => (
  <li key={`${task._id}`} className="item">
    {' '}
    {task.name}
    {task.isFinished
      ? ' ---- acabado'
      : ' ---- dale'}
    {' '}
    <button className="button button--delete" type="button" onClick={() => deleteHandler(task._id)}>Delete</button>
    <button className="button button--done" type="button" onClick={() => updateHandler(task)}>Done</button>
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
