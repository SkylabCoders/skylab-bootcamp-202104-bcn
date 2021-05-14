/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import CardTask from './style';

const Task = ({ task, handleDelete }) => (
  <div key={task._id} className="task">
    <div className="task__content">
      <CardTask>
        <Link to={`tasks/${task._id}`}>
          <h3 className="titleTask">{task.task}</h3>
          <p className="titleTask">{task.description_task}</p>
          <span>{task.done}</span>
        </Link>
      </CardTask>
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
    _id: PropTypes.string,
    task: PropTypes.string,
    description_task: PropTypes.string,
    description: PropTypes.string,
    done: PropTypes.bool
  }).isRequired,
  // eslint-disable-next-line react/require-default-props
  handleDelete: PropTypes.func
};

export default Task;
