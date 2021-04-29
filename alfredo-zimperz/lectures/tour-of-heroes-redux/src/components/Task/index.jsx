import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import './task.css';

const Task = ({ task, handleDelete }) => (
  <div key={task.id} className="task">
    <div className="task__text">
      <Link to={`/tasks/${task.id}`}>
        <h1 className={task.done && 'done'}>{task.title}</h1>
        <p>{task.description}</p>
      </Link>
    </div>
    <div className="task__actions">
      <button
        className="delete"
        title="delete task"
        type="button"
        onClick={() => handleDelete(task.id)}
      >
        x
      </button>
    </div>
  </div>
);

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    done: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Task;
