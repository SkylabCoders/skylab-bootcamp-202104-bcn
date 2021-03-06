/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const Task = ({ task, handleDelete }) => (
  <div className="task">
    <div className="task__text">
      <Link key={task?._id} to={`/tasks/${task?._id}`}>
        <h4 className={`class-${task?._id}`}>{task?.task}</h4>
      </Link>
    </div>
    <div className="task__actions">
      {handleDelete && (
        <button
          className="delete"
          title="delete task"
          type="button"
          onClick={() => handleDelete(task._id)}
        >
          x
        </button>
      )}

    </div>
  </div>
);

Task.propTypes = {
  task: PropTypes.shape({
    task: PropTypes.string,
    _id: PropTypes.string,
    done: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string
  }).isRequired,
  handleDelete: PropTypes.func
};

Task.defaultProps = {
  handleDelete: null
};

export default Task;
